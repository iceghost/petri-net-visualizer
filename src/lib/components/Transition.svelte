<script lang="ts">
    import type Transition from "$lib/Transition";
    import { Shape } from "$lib/Canvas";

    export let transition: Transition;
    $: enable = transition.isEnabled();
</script>

<rect
    x={transition.shape.x - Shape.unit / 2}
    y={transition.shape.y - Shape.unit / 2}
    width={Shape.unit}
    height={Shape.unit}
    class:enable
    filter="url(#shadow)"
/>
<text
    class="fill-slate-500"
    x={transition.shape.x}
    y={transition.shape.y + (transition.label.position == "below"
        ? 0.8 * Shape.unit
        : -0.8 * Shape.unit)}
    alignment-baseline="central"
    text-anchor="middle"
>
    {transition.label.content}
</text>

<style lang="postcss">
    rect {
        @apply drop-shadow-md fill-white stroke-1.5 stroke-black;
    }

    .enable {
        @apply stroke-red-500;
    }
</style>
