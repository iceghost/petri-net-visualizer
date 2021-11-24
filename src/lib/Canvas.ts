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

export class CanvasManager {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");

        this.ctx.fillStyle = "white";
        this.ctx.strokeStyle = "black";
        this.ctx.lineWidth = 3;
        this.ctx.font = '24px "JetBrains Mono", monospace';
        this.ctx.textBaseline = "middle";
        this.ctx.textAlign = "center";
    }

    addClickListener(handler: (event: MouseEvent) => void) {
        this.canvas.addEventListener("mousedown", handler);
    }

    drawShape(shape: Shape) {
        this.ctx.beginPath();
        if (shape.shape === "square")
            this.ctx.rect(
                shape.x - Shape.unit / 2,
                shape.y - Shape.unit / 2,
                Shape.unit,
                Shape.unit
            );
        else this.ctx.arc(shape.x, shape.y, Shape.unit / 2, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.stroke();
    }

    connect(shape: Shape, other: Shape) {
        const dx = other.x - shape.x;
        const dy = other.y - shape.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        const unit_vec = { x: dx / d, y: dy / d };

        let begin = { x: shape.x, y: shape.y };
        if (shape.shape === "circle") {
            begin.x += (unit_vec.x * Shape.unit * Math.sqrt(2)) / 2;
            begin.y += (unit_vec.y * Shape.unit * Math.sqrt(2)) / 2;
        } else {
            begin.x += (unit_vec.x * Shape.unit * Math.sqrt(2)) / 2;
            begin.y += (unit_vec.y * Shape.unit * Math.sqrt(2)) / 2;
        }

        let end = { x: other.x, y: other.y };
        if (other.shape === "circle") {
            end.x -= (unit_vec.x * Shape.unit * Math.sqrt(2)) / 2;
            end.y -= (unit_vec.y * Shape.unit * Math.sqrt(2)) / 2;
        } else {
            end.x -= (unit_vec.x * Shape.unit * Math.sqrt(2)) / 2;
            end.y -= (unit_vec.y * Shape.unit * Math.sqrt(2)) / 2;
        }

        const angle = Math.atan2(end.y - begin.y, end.x - begin.x);

        this.ctx.beginPath();
        this.ctx.moveTo(begin.x, begin.y);
        this.ctx.lineTo(end.x, end.y);
        this.ctx.lineTo(
            end.x - 10 * Math.cos(angle - Math.PI / 6),
            end.y - 10 * Math.sin(angle - Math.PI / 6)
        );
        this.ctx.moveTo(end.x, end.y);
        this.ctx.lineTo(
            end.x - 10 * Math.cos(angle + Math.PI / 6),
            end.y - 10 * Math.sin(angle + Math.PI / 6)
        );
        this.ctx.stroke();
    }

    drawPlace(place: Place) {
        this.drawShape(place.shape);
        this.ctx.fillStyle = "black";
        this.ctx.fillText(`${place.tokens}`, place.shape.x, place.shape.y);

        const labelPos =
            place.label.position === "above"
                ? { x: place.shape.x, y: place.shape.y - Shape.unit }
                : { x: place.shape.x, y: place.shape.y + Shape.unit };

        this.ctx.fillText(place.label.content, labelPos.x, labelPos.y);

        this.ctx.fillStyle = "white";
    }

    drawTransition(transition: Transition) {
        if (transition.isEnabled()) {
            this.ctx.strokeStyle = "red";
            this.drawShape(transition.shape);
            this.ctx.strokeStyle = "black";
        } else this.drawShape(transition.shape);
        for (const post of transition.postset) {
            this.connect(transition.shape, post.shape);
        }
        for (const pre of transition.preset) {
            this.connect(pre.shape, transition.shape);
        }

        this.ctx.fillStyle = "black";

        const labelPos =
            transition.label.position === "above"
                ? { x: transition.shape.x, y: transition.shape.y - Shape.unit }
                : { x: transition.shape.x, y: transition.shape.y + Shape.unit };

        this.ctx.fillText(transition.label.content, labelPos.x, labelPos.y);

        this.ctx.fillStyle = "white";
    }

    drawPlaces(places: Place[]) {
        for (const place of places) {
            this.drawPlace(place);
        }
    }

    drawTransitions(transitions: Transition[]) {
        for (const transition of transitions) {
            this.drawTransition(transition);
        }
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
