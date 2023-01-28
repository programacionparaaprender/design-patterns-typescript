"use strict";
exports.__esModule = true;
exports.DialogFactoryMethod = void 0;
var dialog_type_1 = require("../enums/dialog-type");
var windows_dialog_factory_1 = require("../creator/concrete/windows-dialog-factory");
var web_dialog_factory_1 = require("../creator/concrete/web-dialog-factory");
var DialogFactoryMethod = /** @class */ (function () {
    function DialogFactoryMethod() {
    }
    DialogFactoryMethod.getType = function (dialogType) {
        if (dialogType == dialog_type_1.DialogType.WINDOWS) {
            return new windows_dialog_factory_1.WindowsDialogFactory();
        }
        if (dialogType == dialog_type_1.DialogType.WEB) {
            return new web_dialog_factory_1.WebDialogFactory();
        }
    };
    return DialogFactoryMethod;
}());
exports.DialogFactoryMethod = DialogFactoryMethod;
