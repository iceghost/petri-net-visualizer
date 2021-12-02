import type Place from "./Place";
import type Transition from "./Transition";

export class Shape {
    shape: "circle" | "square";
    x: number;
    y: number;

    static unit = 50;

    constructor(shape: "circle" | "square", x: number, y: number) {
        this.shape = shape;
        this.x = x * Shape.unit;
        this.y = y * Shape.unit;
    }
}
