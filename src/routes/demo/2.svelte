<script lang="ts">
    import Place from "$lib/Place";
    import Transition from "$lib/Transition";
    import PetriNet, * as PN from "$lib/PetriNet";
    import Marking from "$lib/components/Marking.svelte";
    import PetriNetComponent from "$lib/components/PetriNet.svelte";
    import { fly } from "svelte/transition";
    import { flip } from "svelte/animate";

    let wait = new Place(2, 4, 3, "wait", "below");
    const inside = new Place(6, 4, 0, "inside", "below");
    const end = new Place(10, 4, 0, "end", "below");

    const start = new Transition(4, 4, [wait], [inside], "start", "below");
    const change = new Transition(8, 4, [inside], [end], "change", "below");

    let petriNet = new PetriNet(
        [inside, wait, end],
        [start, change]
    );
    function setPatients(value) {
        wait.tokens = value || 0;
        petriNet.reset({ wait: wait.tokens, free: 1 });
        petriNet = petriNet;
    }
    function fire(transition: Transition) {
        petriNet.fire(transition);
        petriNet = petriNet;
    }
    function reset() {
        petriNet.reset();
        petriNet = petriNet;
    }
    function undoTo(i: number) {
        petriNet.undoTo(i);
        petriNet = petriNet;
    }
</script>

<main class="h-[calc(100vh-3rem)] flex flex-col sm:flex-row items-stretch">
    <aside
        class="p-4 sm:w-full sm:max-w-sm bg-slate-50 border-b-1.5 sm:border-r-1.5 overflow-y-scroll"
    >
        <p>
            Số bệnh nhân ban đầu:
            <input
                type="number"
                value={wait.tokens}
                on:change={e => setPatients(e.currentTarget.value)}
                class="border-1.5 rounded-md w-12 text-center"
            />
        </p>
        <div
            class="flex items-center justify-between mt-4 mb-2 pt-2 border-t border-slate-300"
        >
            <h2 class="font-bold uppercase text-sm tracking-wider">
                Enabled transition(s)
            </h2>
        </div>

        {#each petriNet.getEnabledTransitions() as transition (transition.label.content)}
                <button animate:flip transition:fly|local class="bg-green-200 px-2 mr-2 rounded-full" on:click={() => fire(transition)}>
                    {transition.label.content}
                </button>
        {:else}
            <p>Không còn enabled transition.</p>
        {/each}

        <div
            class="flex items-center justify-between mt-4 pt-2 border-t border-slate-300"
        >
            <h2 class="font-bold uppercase text-sm tracking-wider">Markings</h2>
            <button
                class="px-2 py-0.5 text-green-600 border-1.5 border-b-green-500 border-transparent hover:border-green-500 hover:shadow-md active:shadow-none rounded-md"
                on:click={() => reset()}>Reset ♻️</button
            >
        </div>
        <div class="transition-[max-height] duration-500">
            <Marking marking={petriNet.initialMarking} />
            {#each petriNet.firings as { transition, marking }, i}
                <p transition:fly|local={{ x: 0, y: -10 }}>⬇️ {transition}</p>
                <Marking {marking} on:click={() => undoTo(i)}/>
            {/each}
        </div>
    </aside>
    <PetriNetComponent bind:petriNet />
</main>

<style lang="postcss">
    input[type="number"] {
        -moz-appearance: textfield;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
</style>