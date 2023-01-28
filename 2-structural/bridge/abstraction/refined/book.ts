import {Manuscript} from "../manuscript";
import {Formatter} from "../../implementor/abstract/formatter";

export class Book extends Manuscript {
    private title: string;
    private author: string;
    private text: string;

    constructor(formatter: Formatter) {
        super(formatter);
    }

    public getTitle(): string {
        return this.title;
    }

    public changeTitle(title: string): void {
        this.title = title;
    }

    public getAuthor(): string {
        return this.author;
    }

    public changeAuthor(author: string): void {
        this.author = author;
    }

    public getText(): string {
        return this.text;
    }

    public changeText(text: string): void {
        this.text = text;
    }

    public print(): void {
        console.log(this.formatter.format("Title", this.title));
        console.log(this.formatter.format("Author", this.author));
        console.log(this.formatter.format("Text", this.text));
    }
}