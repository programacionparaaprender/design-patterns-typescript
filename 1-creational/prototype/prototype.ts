import {CircularReference} from "./circular-reference";

export class Prototype {
    public primitive: number;
    public component: object;
    public circularReference: CircularReference;

    public clone(): this {
        const clone = Object.create(this);
        clone.component = Object.create(this.component);
        clone.circularReference = {
            ...this.circularReference,
            prototype: { ...this },
        };
        return clone;
    }
}