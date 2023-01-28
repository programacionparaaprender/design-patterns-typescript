import {Button} from "../../product/abstract/button";

export abstract class DialogFactory {
    protected constructor() {
    }

    public abstract createButton(): Button;

    public render(): void {
        let okButton: Button = this.createButton();
        okButton.onClick();
        okButton.render();
    }
}