"use strict";
exports.__esModule = true;
var cheese_1 = require("./decorator/concret/cheese");
var ham_1 = require("./decorator/concret/ham");
var peppers_1 = require("./decorator/concret/peppers");
var pizza_factory_1 = require("./factory/pizza-factory");
var pizza_type_1 = require("./factory/pizza-type");
function clientCode() {
    var pizza = pizza_factory_1.PizzaFactory.getType(pizza_type_1.PizzaType.MEDIUM);
    pizza = new cheese_1.Cheese(pizza);
    pizza = new ham_1.Ham(pizza);
    //pizza = new Ham(pizza);
    pizza = new peppers_1.Peppers(pizza);
    console.log(pizza.getDescription());
    console.log(pizza.calculateCost());
}
clientCode();
