"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Ham = void 0;
var pizza_decorator_1 = require("../abstract/pizza-decorator");
var Ham = /** @class */ (function (_super) {
    __extends(Ham, _super);
    function Ham(pizza) {
        var _this = _super.call(this, pizza) || this;
        _this.description = "Ham (1.00)";
        return _this;
    }
    Ham.prototype.getDescription = function () {
        return this.pizza.getDescription() + ', ' + this.description;
    };
    Ham.prototype.calculateCost = function () {
        return this.pizza.calculateCost() + 1.00;
    };
    return Ham;
}(pizza_decorator_1.PizzaDecorator));
exports.Ham = Ham;
