<script lang="ts">
    import type { Marking } from "$lib/PetriNet";
    import { fly } from "svelte/transition";

    export let marking: Marking;
</script>

<div class="flex items-center justify-between group">
    <p transition:fly|local={{ x: -10, y: 0, delay: 150 }}>
        🎯 [ {#each Object.entries(marking) as [label, tokens]}
        <span>{label}<sup>{tokens}</sup></span>
        {/each}]
    </p>
    <button class="text-slate-300 hidden group-hover:inline hover:cursor-pointer hover:text-slate-800" on:click>
        set marking
    </button>
</div>

<style>
    span + span::before {
        content: ", ";
    }
</style>
