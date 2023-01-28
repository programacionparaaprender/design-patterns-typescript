import {Formatter} from "./implementor/abstract/formatter";
import {Book} from "./abstraction/refined/book";
import {Paper} from "./abstraction/refined/paper";
import {FormatterFactory} from "./factory/formatter-factory";
import {FormatterType} from "./factory/formatter-type";
import {Brochure} from "./abstraction/refined/brochure";
import {Thesis} from "./abstraction/refined/thesis";

function clientCode() {
    let fomatterBrochure: Formatter = FormatterFactory.getType(FormatterType.BACKWARDS);
    let brochure: Brochure = new Brochure(fomatterBrochure);
    brochure.changeText("Text of the brochure");
    brochure.print();

    console.log("*************************************************************");
    let fomatterThesis: Formatter = FormatterFactory.getType(FormatterType.BACKWARDS);
    let thesis: Thesis = new Thesis(fomatterThesis);
    thesis.changeAuthor("Juan Pérez");
    thesis.changeTitle("Design Patterns");
    thesis.changeText("Text of the thesis");
    thesis.changeReferences("References of the thesis");
    thesis.print();

    console.log("*************************************************************");
    let fomatterBook: Formatter = FormatterFactory.getType(FormatterType.BACKWARDS);
    let book: Book = new Book(fomatterBook);
    book.changeAuthor("Robert C. Martin");
    book.changeTitle("Clean Code");
    book.changeText("Text of the book");
    book.print();

    console.log("*************************************************************");
    let fomatterPaper: Formatter = FormatterFactory.getType(FormatterType.IEEE);
    let paper: Paper = new Paper(fomatterPaper);
    paper.changeAuthor("Juan Pérez");
    paper.changeTitle("Design Patterns");
    paper.changeText("Text of the paper");
    paper.changeReferences("References of the paper");
    paper.print();
}

clientCode();