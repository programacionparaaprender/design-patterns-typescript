import {SandwichBuilder} from "../abstract/sandwich-builder";
import {BreadType} from "../../enums/bread-type";
import {CheeseType} from "../../enums/cheese-type";
import {MeatType} from "../../enums/meat-type";

export class ClubSandwichBuilder extends SandwichBuilder {
    public addCondiments(): void {
        this.sandwich.setHasMayonnaise(true);
        this.sandwich.setHasMustard(true);
    }

    public applyMeatAndCheese(): void {
        this.sandwich.setCheeseType(CheeseType.SWISS);
        this.sandwich.setMeatType(MeatType.TURKEY);
    }

    public applyVegetables(): void {
        this.sandwich.setVegetables(["Tomato", "Onion", "Lettuce"]);
    }

    public prepareBread(): void {
        this.sandwich.setBreadType(BreadType.WHITE);
        this.sandwich.setToasted(true);
    }
}