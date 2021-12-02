<script lang="ts">
    import Place from "$lib/Place";
    import Transition from "$lib/Transition";
    import PetriNet, * as PN from "$lib/PetriNet";
    import Marking from "$lib/components/Marking.svelte";
    import PetriNetComponent from "$lib/components/PetriNet.svelte";
    import { fly } from "svelte/transition";
    import { flip } from "svelte/animate";

    const free = new Place(4, 2, 1, "free", "above");
    const busy = new Place(6, 4, 0, "busy", "below");
    const docu = new Place(8, 2, 0, "docu", "above");

    const start = new Transition(4, 4, [free], [busy], "start", "below");
    const change = new Transition(8, 4, [busy], [docu], "change", "below");
    const done = new Transition(6, 2, [docu], [free], "done", "above");

    let petriNet = new PetriNet(
        [free, busy, docu],
        [start, change, done]
    );
    function setSpecialists(value) {
        free.tokens = value || 0;
        petriNet.reset({ free: free.tokens });
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
        class="p-4 sm:w-1/3 sm:min-w-[12rem] bg-slate-50 border-b-1.5 sm:border-r-1.5 overflow-y-scroll"
    >
        <p>
            Số bác sĩ ban đầu:
            <input
                type="number"
                value={free.tokens}
                on:change={e => setSpecialists(e.currentTarget.value)}
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