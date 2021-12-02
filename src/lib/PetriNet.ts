import type Place from "./Place";
import type Transition from "./Transition";

export interface Marking {
    [name: string]: number;
}

export default class PetriNet {
    places: Place[];
    transitions: Transition[];
    initialMarking: Marking;
    firings: { transition: string; marking: Marking }[];

    constructor(places: Place[], transitions: Transition[]) {
        this.places = places;
        this.transitions = transitions;
        this.initialMarking = this.getMarking();
        this.firings = [];
    }

    getEnabledTransitions(): Transition[] {
        return this.transitions.filter((t) => t.isEnabled());
    }

    fire(transition: Transition) {
        if (transition.isEnabled()) {
            transition.fire();
            this.firings.push({
                transition: transition.label.content,
                marking: this.getMarking(),
            });
        }
    }

    getMarking(): Marking {
        const marking: Marking = {};
        for (const place of this.places) {
            if (place.tokens) marking[place.label.content] = place.tokens;
        }
        return marking;
    }

    setMarking(marking: Marking) {
        for (const place of this.places) {
            place.tokens = marking[place.label.content] || 0;
        }
    }

    reset(marking = this.initialMarking) {
        this.firings = [];
        if (marking) this.initialMarking = marking;
        this.setMarking(this.initialMarking);
    }

    undoTo(i: number) {
        this.firings = this.firings.slice(0, i + 1);
        this.setMarking(this.firings[i].marking);
    }
}
