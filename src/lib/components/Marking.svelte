<script lang="ts">
    import type { Marking } from "$lib/PetriNet";
    import { fly } from "svelte/transition";

    export let marking: Marking;
</script>

<p transition:fly|local={{ x: -10, y: 0, delay:150 }}>
    🎯 [{#each Object.entries(marking) as [label, tokens]}
        <span>{label}<sup>{tokens}</sup></span>
    {/each}]
</p>

<style>
    span + span::before {
        content: ", ";
    }
</style>
