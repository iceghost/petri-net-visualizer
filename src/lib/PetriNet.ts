import type Place from "./Place";
import type Transition from "./Transition";

export default class PetriNet {
    places: Place[];
    transitions: Transition[];

    constructor(places: Place[], transitions: Transition[]) {
        this.places = places;
        this.transitions = transitions;
    }

    getEnabledTransitions() {
        return this.transitions.filter(t => t.isEnabled());
    }
}
