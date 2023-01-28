import {DialogFactory} from "../abstract/dialog-factory";
import {Button} from "../../product/abstract/button";
import {HtmlButton} from "../../product/concrete/html-button";

export class WebDialogFactory extends DialogFactory {
    constructor() {
        super();
    }

    public createButton(): Button {
        return new HtmlButton();
    }
}