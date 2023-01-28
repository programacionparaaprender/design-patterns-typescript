import {DialogFactory} from "./creator/abstract/dialog-factory";
import {DialogType} from "./enums/dialog-type";
import {DialogFactoryMethod} from "./factory/dialog-factory-method";

function clientCode() {
    let dialog: DialogFactory = DialogFactoryMethod.getType(DialogType.WEB);
    dialog.render();
}

clientCode();