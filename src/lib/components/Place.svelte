<script context="module" lang="ts">
    const tokenPos = [
        // 0
        [],
        // 1
        [{ dx: 0, dy: 0 }],
        // 2
        [
            { dx: -0.3, dy: 0 },
            { dx: 0.3, dy: 0 },
        ],
        // 3
        [
            { dx: -0.5, dy: 0 },
            { dx: 0, dy: 0 },
            { dx: 0.5, dy: 0 },
        ],
        // 4
        [
            { dx: -0.3, dy: -0.3 },
            { dx: -0.3, dy: 0.3 },
            { dx: 0.3, dy: 0.3 },
            { dx: 0.3, dy: -0.3 },
        ],
        // 5
        [
            { dx: -0.4, dy: -0.4 },
            { dx: -0.4, dy: 0.4 },
            { dx: 0, dy: 0 },
            { dx: 0.4, dy: 0.4 },
            { dx: 0.4, dy: -0.4 },
        ],
        [
            { dx: 0.3, dy: 0.5 },
            { dx: -0.3, dy: 0.5 },
            { dx: 0.3, dy: 0 },
            { dx: -0.3, dy: 0 },
            { dx: -0.3, dy: -0.5 },
            { dx: 0.3, dy: -0.5 },
        ],
    ];
</script>

<script lang="ts">
    import type Place from "$lib/Place";
    import { Shape } from "$lib/Canvas";
    import { flip } from "svelte/animate";
    import { fade } from "svelte/transition";

    export let place: Place;
</script>

<circle cx={place.shape.x} cy={place.shape.y} r={Shape.unit / 2} />
<text
    class="fill-slate-500"
    x={place.shape.x}
    y={place.shape.y +
        (place.label.position == "below"
            ? 0.8 * Shape.unit
            : -0.8 * Shape.unit)}
    alignment-baseline="central"
    text-anchor="middle"
>
    {place.label.content}
</text>

<!-- Tokens -->
{#if place.tokens < tokenPos.length}
    {#each tokenPos[place.tokens] as pos, i (i)}
        <circle
            class="token"
            animate:flip={{ delay: 100 }}
            transition:fade|local={{ duration: 100 }}
            cx={place.shape.x + (pos.dx * Shape.unit) / 2}
            cy={place.shape.y + (pos.dy * Shape.unit) / 2}
            r={Shape.unit / 15}
        />
    {/each}
{:else}
    {#key place.tokens}
        <text
            transition:fade|local={{ duration: 100 }}
            class="text-xl font-bold"
            x={place.shape.x}
            y={place.shape.y}
            alignment-baseline="central"
            text-anchor="middle"
        >
            {place.tokens}
        </text>
    {/key}
{/if}

<style lang="postcss">
    circle {
        @apply stroke-black fill-white stroke-1.5;
    }
    .token {
        @apply fill-black;
    }
</style>
