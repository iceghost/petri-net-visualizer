import { Shape } from "./Canvas";
import type Place from "./Place";

export default class Transition {
    shape: Shape;
    preset: Place[];
    postset: Place[];
    label: {
        content: string;
        position: "above" | "below";
    };

    constructor(
        x: number,
        y: number,
        preset: Place[],
        postset: Place[],
        label: string,
        position: "above" | "below"
    ) {
        this.shape = new Shape("square", x, y);
        this.preset = preset;
        this.postset = postset;
        this.label = {
            content: label,
            position
        };
    }

    isEnabled() {
        for (const pre of this.preset) {
            if (pre.tokens == 0) return false;
        }
        return true;
    }

    fire() {
        for (const pre of this.preset) {
            --pre.tokens;
        }
        for (const post of this.postset) {
            ++post.tokens;
        }
    }
}
