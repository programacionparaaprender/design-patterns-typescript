"use strict";
exports.__esModule = true;
exports.Flyweight = void 0;
var Flyweight = /** @class */ (function () {
    function Flyweight(intrinsicState) {
        this.intrinsicState = intrinsicState;
    }
    Flyweight.prototype.operation = function (extrinsicState) {
        var sharedState = JSON.stringify(this.intrinsicState);
        var uniqueState = JSON.stringify(extrinsicState);
        console.log("Flyweight: Displaying shared (" + sharedState + ") and unique (" + uniqueState + ") state.");
    };
    return Flyweight;
}());
exports.Flyweight = Flyweight;
