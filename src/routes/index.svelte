<script lang="ts">
    import Place from "$lib/Place";
    import Transition from "$lib/Transition";
    import { CanvasManager } from "$lib/Canvas";
    import PetriNet, * as PN from "$lib/PetriNet";
    import { onMount } from "svelte";
    import Marking from "$lib/components/Marking.svelte";

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

    let canvas;
    let canvasManager: CanvasManager;
    onMount(() => {
        canvasManager = new CanvasManager(canvas);
        draw();
    });

    function draw() {
        canvasManager.clear();
        canvasManager.drawPlaces(petriNet.places);
        canvasManager.drawTransitions(petriNet.transitions);
    }
    function fire(transition: Transition) {
        transition.fire();
        draw();
        prevMarkings.push(petriNet.getMarking());
        prevMarkings = prevMarkings;
        petriNet = petriNet;
    }
    function reset(marking) {
        petriNet.setMarking(marking);
        draw();
        petriNet = petriNet;
    }
</script>

<main class="h-screen w-screen flex items-stretch">
        <canvas
            bind:this={canvas}
            width="900"
            height="600"
            class="w-full border"
        />
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
