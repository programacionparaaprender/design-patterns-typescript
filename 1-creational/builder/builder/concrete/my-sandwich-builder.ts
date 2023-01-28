import {SandwichBuilder} from "../abstract/sandwich-builder";
import {BreadType} from "../../enums/bread-type";
import {CheeseType} from "../../enums/cheese-type";
import {MeatType} from "../../enums/meat-type";

export class MySandwichBuilder extends SandwichBuilder {
    public addCondiments(): void {
        this.sandwich.setHasMayonnaise(false);
        this.sandwich.setHasMustard(true);
    }

    public applyMeatAndCheese(): void {
        this.sandwich.setCheeseType(CheeseType.CHEDDAR);
        this.sandwich.setMeatType(MeatType.CHICKEN);
    }

    public applyVegetables(): void {
        this.sandwich.setVegetables(["Tomato", "Onion"]);
    }

    public prepareBread(): void {
        this.sandwich.setBreadType(BreadType.WHITE);
        this.sandwich.setToasted(false);
    }
}