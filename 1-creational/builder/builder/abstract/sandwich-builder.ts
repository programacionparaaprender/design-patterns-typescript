import {Sandwich} from "../../product/sandwich";

export abstract class SandwichBuilder {
    protected sandwich: Sandwich;

    public getSandwich(): Sandwich {
        return this.sandwich;
    }

    public createNewSandwich() {
        this.sandwich = new Sandwich();
    }

    public abstract prepareBread(): void;
    public abstract applyMeatAndCheese(): void;
    public abstract applyVegetables(): void;
    public abstract addCondiments(): void;
}