<script lang="ts">
    import type Place from "$lib/Place";
    import { Shape } from "$lib/Canvas";

    export let place: Place;
</script>

<circle cx={place.shape.x} cy={place.shape.y} r={Shape.unit / 2} />

<style lang="postcss">
    circle {
        @apply stroke-black fill-white stroke-2;
    }
</style>
