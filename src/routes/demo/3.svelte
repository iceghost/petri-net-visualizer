<script lang="ts">
    import Place from "$lib/Place";
    import Transition from "$lib/Transition";
    import PetriNet, * as PN from "$lib/PetriNet";
    import Marking from "$lib/components/Marking.svelte";
    import PetriNetComponent from "$lib/components/PetriNet.svelte";
    import { fly } from "svelte/transition";

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

    $: prevFirings = [...petriNet.firings];

    function fire(transition: Transition) {
        petriNet.fire(transition);
        petriNet = petriNet;
    }
    function reset() {
        petriNet.reset();
        petriNet = petriNet;
    }
</script>

<main
    class="h-full min-h-[calc(100vh-3rem)] flex flex-col sm:flex-row items-stretch"
>
    <aside
        class="p-4 sm:w-1/3 sm:min-w-[12rem] bg-slate-50 border-b-1.5 sm:border-r-1.5"
    >
        <p>Chọn transition muốn fire:</p>

        {#each petriNet.getEnabledTransitions() as transition}
            <button on:click={() => fire(transition)}>
                {transition.label.content}
            </button>
        {:else}
            <p>Không còn enabled transition.</p>
        {/each}

        <div class="flex items-center justify-between">
            <h2>Markings:</h2>
            <button
                class="px-2 py-0.5 text-green-600 border-1.5 border-b-green-500 border-transparent hover:border-green-500 hover:shadow-md active:shadow-none rounded-md"
                on:click={() => reset()}>Reset ♻️</button
            >
        </div>
        <div class="transition-[max-height] duration-500">
            <Marking marking={petriNet.initialMarking} />
            {#each petriNet.firings as { transition, marking }}
                <p transition:fly|local={{ x: 0, y: -10 }}>⬇️ {transition}</p>
                <Marking {marking} />
            {/each}
        </div>
    </aside>
    <PetriNetComponent bind:petriNet />
</main>
