import {DialogFactory} from "../abstract/dialog-factory";
import {Button} from "../../product/abstract/button";
import {WindowsButton} from "../../product/concrete/windows-button";

export class WindowsDialogFactory extends DialogFactory {
    constructor() {
        super();
    }

    public createButton(): Button {
        return new WindowsButton();
    }
}