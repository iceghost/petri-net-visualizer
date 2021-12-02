<script lang="ts">
    import { Shape } from "$lib/Canvas";
    import { getContext } from 'svelte';

    export let from: Shape;
    export let to: Shape;
    export let enabled = false;
    let fromDir, toDir;

    let exceptions: any = getContext('arrow exceptions');
    let exception = exceptions && exceptions.find(e => e.from == from && e.to == to);
    if (exception) {
        fromDir = exception.fromDir;
        toDir = exception.toDir;
    }

    const dx = to.x - from.x;
    const dy = to.y - from.y;
    if (!fromDir) {
        if (dx >= Math.abs(dy)) fromDir = "right";
        else if (dy >= Math.abs(dx)) fromDir = "bottom";
        else if (dx <= -Math.abs(dy)) fromDir = "left";
        else fromDir = "top";
    }

    if(!toDir) {
        if (-dx >= Math.abs(dy)) toDir = "right";
        else if (-dy >= Math.abs(dx)) toDir = "bottom";
        else if (-dx <= -Math.abs(dy)) toDir = "left";
        else toDir = "top";
    }

    function getPoint(x: number, y: number, dir) {
        if (dir == "right") return `${x + Shape.unit / 2} ${y}`;
        if (dir == "top") return `${x} ${y - Shape.unit / 2}`;
        if (dir == "left") return `${x - Shape.unit / 2} ${y}`;
        if (dir == "bottom") return `${x} ${y + Shape.unit / 2}`;
    }
</script>

<path
    class="arrow"
    class:enabled
    d="M{getPoint(from.x, from.y, fromDir)} L{getPoint(to.x, to.y, toDir)}"
    marker-end={enabled ? "url(#enabled-triangle)" : "url(#triangle)"}
/>

<style lang="postcss">
    :global(.arrow) {
        @apply fill-slate-300 stroke-slate-300;
    }
    .enabled {
        @apply stroke-green-400;
    }
</style>
