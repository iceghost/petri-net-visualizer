<script lang="ts">
    import Place from "$lib/Place";
    import Transition from "$lib/Transition";
    import TransitionComponent from "$lib/components/Transition.svelte";
    import PlaceComponent from "$lib/components/Place.svelte";
    import { CanvasManager } from "$lib/Canvas";
    import PetriNet, * as PN from "$lib/PetriNet";
    import { onMount } from "svelte";
    import Marking from "$lib/components/Marking.svelte";
    import Arrow from "$lib/components/Arrow.svelte";

    const initialMarking = {
        free: 1,
        wait: 3,
    };

    let prevMarkings: PN.Marking[] = [initialMarking];

    const free = new Place(4, 2, 1, "free", "above");
    const busy = new Place(6, 4, 0, "busy", "below");
    const docu = new Place(8, 2, 0, "docu", "above");
    const wait = new Place(2, 4, 3, "wait", "below");
    const end = new Place(10, 4, 0, "end", "below");

    const start = new Transition(4, 4, [wait, free], [busy], "start", "below");
    const change = new Transition(8, 4, [busy], [docu, end], "change", "below");
    const done = new Transition(6, 2, [docu], [free], "done", "above");

    let petriNet = new PetriNet(
        [free, busy, docu, wait, end],
        [start, change, done]
    );

    function fire(transition: Transition) {
        transition.fire();
        prevMarkings.push(petriNet.getMarking());
        prevMarkings = prevMarkings;
        petriNet = petriNet;
    }
    function reset(marking) {
        petriNet.setMarking(marking);
        petriNet = petriNet;
    }
</script>

<main class="min-h-screen w-screen flex items-stretch">
    <svg class="w-full">
        <defs>
            <!-- prettier-ignore -->
            <marker id="triangle" viewBox="0 0 10 10"
                refX="10" refY="5"
                markerUnits="strokeWidth"
                markerWidth="10" markerHeight="10"
                orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" class="fill-blue-500"/>
            </marker>
            <!-- prettier-ignore -->
            <filter id="shadow" x="0" y="0" width="100%" height="120%">
                <feOffset result="offOut" in="SourceAlpha" dx="0" dy="5" />
                <feGaussianBlur result="blurOut" in="offOut" stdDeviation="10" />
                <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
            </filter>
          </defs>
        {#each petriNet.transitions as transition}
            <TransitionComponent {transition} />
            {#each transition.preset as pre}
                <Arrow from={pre.shape} to={transition.shape} />
            {/each}
            {#each transition.postset as post}
                <Arrow from={transition.shape} to={post.shape} />
            {/each}
        {/each}
        {#each petriNet.places as place}
            <PlaceComponent {place} />
        {/each}
    </svg>
    <aside class="w-1/3 bg-slate-800 text-white">
        <p>Chọn transition muốn fire:</p>

        {#each petriNet.getEnabledTransitions() as transition}
            <button on:click={() => fire(transition)}>
                {transition.label.content}
            </button>
        {:else}
            <p>Không còn enabled transition.</p>
        {/each}

        <div>
            Markings:
            <p>
                {#each prevMarkings as marking}
                    <Marking {marking} />
                {/each}
            </p>
        </div>

        <button on:click={() => reset(initialMarking)}>Reset</button>
    </aside>
</main>

<style lang="postcss">
    button {
        @apply bg-green-200 text-green-900 px-2 py-1;
    }
</style>
