"use strict";
exports.__esModule = true;
var dialog_type_1 = require("./enums/dialog-type");
var dialog_factory_method_1 = require("./factory/dialog-factory-method");
function clientCode() {
    var dialog = dialog_factory_method_1.DialogFactoryMethod.getType(dialog_type_1.DialogType.WEB);
    dialog.render();
}
clientCode();
