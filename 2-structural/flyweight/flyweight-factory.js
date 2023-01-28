"use strict";
exports.__esModule = true;
exports.FlyweightFactory = void 0;
var flyweight_1 = require("./flyweight");
var FlyweightFactory = /** @class */ (function () {
    function FlyweightFactory(initialFlyweights) {
        this.flyweights = {};
        for (var _i = 0, initialFlyweights_1 = initialFlyweights; _i < initialFlyweights_1.length; _i++) {
            var state = initialFlyweights_1[_i];
            this.flyweights[this.getKey(state)] = new flyweight_1.Flyweight(state);
        }
    }
    FlyweightFactory.prototype.getKey = function (state) {
        return state.join('_');
    };
    FlyweightFactory.prototype.getFlyweight = function (sharedState) {
        var key = this.getKey(sharedState);
        if (!(key in this.flyweights)) {
            console.log('FlyweightFactory: Can\'t find a flyweight, creating new one.');
            this.flyweights[key] = new flyweight_1.Flyweight(sharedState);
        }
        else {
            console.log('FlyweightFactory: Reusing existing flyweight.');
        }
        return this.flyweights[key];
    };
    FlyweightFactory.prototype.listFlyweights = function () {
        var count = Object.keys(this.flyweights).length;
        console.log("\nFlyweightFactory: I have " + count + " flyweights:");
        for (var key in this.flyweights) {
            console.log('key: ' + key);
        }
    };
    return FlyweightFactory;
}());
exports.FlyweightFactory = FlyweightFactory;
