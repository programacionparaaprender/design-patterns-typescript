"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.Prototype = void 0;
var Prototype = /** @class */ (function () {
    function Prototype() {
    }
    Prototype.prototype.clone = function () {
        var clone = Object.create(this);
        clone.component = Object.create(this.component);
        clone.circularReference = __assign(__assign({}, this.circularReference), { prototype: __assign({}, this) });
        return clone;
    };
    return Prototype;
}());
exports.Prototype = Prototype;
