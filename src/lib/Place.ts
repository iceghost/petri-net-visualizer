import { Shape } from "./Canvas";

export default class Place {
    shape: Shape;
    tokens: number;
    label: {
        content: string;
        position: "above" | "below";
    };

    constructor(
        x: number,
        y: number,
        tokens: number,
        label: string,
        position: "above" | "below"
    ) {
        this.shape = new Shape("circle", x, y);
        this.tokens = tokens;
        this.label = {
            content: label,
            position
        };
    }
}
