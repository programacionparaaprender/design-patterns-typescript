import {SandwichDirector} from "./director/sandwich-director";
import {MySandwichBuilder} from "./builder/concrete/my-sandwich-builder";
import {Sandwich} from "./product/sandwich";
import {ClubSandwichBuilder} from "./builder/concrete/club-sandwich-builder";
import {SandwichBuilder} from "./builder/abstract/sandwich-builder";
import {OtherSandwichBuilder} from "./builder/concrete/other-sandwich-builder";

function clientCode() {
    let builder: SandwichBuilder;
    //builder = new MySandwichBuilder();
    //builder = new ClubSandwichBuilder();
    builder = new OtherSandwichBuilder();
    let sandwichDirector: SandwichDirector = new SandwichDirector(builder);
    sandwichDirector.buildSandwich();
    let sandwich: Sandwich = sandwichDirector.getSandwich();
    sandwich.display();
}

clientCode();