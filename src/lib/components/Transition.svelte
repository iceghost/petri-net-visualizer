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

<style lang="postcss">
    rect {
        @apply drop-shadow-md fill-white stroke-2;
    }

    .enable {
        @apply stroke-red-500;
    }
</style>
