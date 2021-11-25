<script lang="ts">
    import type { Marking } from "$lib/PetriNet";

    export let marking: Marking;
</script>

<p>
    [{#each Object.entries(marking) as [label, tokens]}
        <span>{label}<sup>{tokens}</sup></span>
    {/each}]
</p>

<style>
    span + span::before {
        content: ", ";
    }
</style>
