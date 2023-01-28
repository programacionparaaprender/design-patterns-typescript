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
exports.WindowsDialogFactory = void 0;
var dialog_factory_1 = require("../abstract/dialog-factory");
var windows_button_1 = require("../../product/concrete/windows-button");
var WindowsDialogFactory = /** @class */ (function (_super) {
    __extends(WindowsDialogFactory, _super);
    function WindowsDialogFactory() {
        return _super.call(this) || this;
    }
    WindowsDialogFactory.prototype.createButton = function () {
        return new windows_button_1.WindowsButton();
    };
    return WindowsDialogFactory;
}(dialog_factory_1.DialogFactory));
exports.WindowsDialogFactory = WindowsDialogFactory;
