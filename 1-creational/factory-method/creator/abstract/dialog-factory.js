"use strict";
exports.__esModule = true;
exports.DialogFactory = void 0;
var DialogFactory = /** @class */ (function () {
    function DialogFactory() {
    }
    DialogFactory.prototype.render = function () {
        var okButton = this.createButton();
        okButton.onClick();
        okButton.render();
    };
    return DialogFactory;
}());
exports.DialogFactory = DialogFactory;
