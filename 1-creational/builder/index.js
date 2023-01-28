"use strict";
exports.__esModule = true;
var sandwich_director_1 = require("./director/sandwich-director");
var other_sandwich_builder_1 = require("./builder/concrete/other-sandwich-builder");
function clientCode() {
    var builder;
    //builder = new MySandwichBuilder();
    //builder = new ClubSandwichBuilder();
    builder = new other_sandwich_builder_1.OtherSandwichBuilder();
    var sandwichDirector = new sandwich_director_1.SandwichDirector(builder);
    sandwichDirector.buildSandwich();
    var sandwich = sandwichDirector.getSandwich();
    sandwich.display();
}
clientCode();
