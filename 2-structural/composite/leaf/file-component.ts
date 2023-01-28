import {FileSystemComponent} from "../component/file-system-component";

export class FileComponent extends FileSystemComponent {
    private readonly size: number;

    constructor(name: string, size: number) {
        super(name);
        this.size = size;
    }

    public getComponentSize(): number {
        return this.size;
    }
}