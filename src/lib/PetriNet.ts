import type Place from "./Place";
import type Transition from "./Transition";

export interface Marking {
    [name: string]: number;
}

export type FireSequence = string[];

export default class PetriNet {
    places: Place[];
    transitions: Transition[];

    constructor(places: Place[], transitions: Transition[]) {
        this.places = places;
        this.transitions = transitions;
    }

    getEnabledTransitions(): Transition[] {
        return this.transitions.filter((t) => t.isEnabled());
    }

    getMarking(): Marking {
        const marking: Marking = {};
        for (const place of this.places) {
            if (place.tokens)
                marking[place.label.content] = place.tokens;
        }
        return marking;
    }

    setMarking(marking: Marking) {
        for (const place of this.places) {
            place.tokens = marking[place.label.content] || 0;
        }
    }
}
