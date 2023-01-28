import {DialogType} from "../enums/dialog-type";
import {WindowsDialogFactory} from "../creator/concrete/windows-dialog-factory";
import {WebDialogFactory} from "../creator/concrete/web-dialog-factory";
import {DialogFactory} from "../creator/abstract/dialog-factory";

export class DialogFactoryMethod {
    public static getType(dialogType: DialogType): DialogFactory {
        if (dialogType == DialogType.WINDOWS) {
            return new WindowsDialogFactory();
        }
        if (dialogType == DialogType.WEB) {
            return new WebDialogFactory();
        }
    }
}