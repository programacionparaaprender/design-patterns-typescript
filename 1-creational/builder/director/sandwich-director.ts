import {Sandwich} from "../product/sandwich";
import {SandwichBuilder} from "../builder/abstract/sandwich-builder";

export class SandwichDirector {
    private builder: SandwichBuilder;

    constructor(builder: SandwichBuilder) {
        this.builder = builder;
    }

    public buildSandwich(): void {
        this.builder.createNewSandwich();
        this.builder.prepareBread();
        this.builder.applyMeatAndCheese();
        this.builder.applyVegetables();
        this.builder.addCondiments();
    }

    public getSandwich(): Sandwich {
        return this.builder.getSandwich();
    }
}