<script lang="ts">
    import Place from "$lib/Place";
    import type Transition from "$lib/Transition";
    import TransitionComponent from "$lib/components/Transition.svelte";
    import PlaceComponent from "$lib/components/Place.svelte";
    import type * as PetriNet from "$lib/PetriNet";
    import Arrow from "$lib/components/Arrow.svelte";

    export let petriNet: PetriNet.default;

    function fire(transition: Transition) {
        petriNet.fire(transition);
        petriNet = petriNet;
    }
</script>

<div class="w-full h-full overflow-auto">
    <svg class="w-full min-w-[600px] h-full min-h-[400px]">
        <defs>
            <!-- prettier-ignore -->
            <marker id="triangle" viewBox="0 0 10 10" refX="10" refY="5" markerUnits="strokeWidth" markerWidth="10" markerHeight="10" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 z" class="fill-slate-300"/>
            </marker>
            <!-- prettier-ignore -->
            <marker id="enabled-triangle" viewBox="0 0 10 10" refX="10" refY="5" markerUnits="strokeWidth" markerWidth="10" markerHeight="10" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 z" class="fill-green-300"/>
            </marker>
        </defs>
        {#each petriNet.transitions as transition}
            <TransitionComponent
                {transition}
                on:click={() => fire(transition)}
            />
            {#each transition.preset as pre}
                <Arrow enabled={transition.isEnabled()} from={pre.shape} to={transition.shape} />
            {/each}
            {#each transition.postset as post}
                <Arrow enabled={transition.isEnabled()} from={transition.shape} to={post.shape} />
            {/each}
        {/each}
        {#each petriNet.places as place}
            <PlaceComponent {place} />
        {/each}
    </svg>
</div>
