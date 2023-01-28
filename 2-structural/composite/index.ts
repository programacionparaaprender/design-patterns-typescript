import {FolderComponent} from "./composite/folder-component";
import {FileComponent} from "./leaf/file-component";
import {FileSystemComponent} from "./component/file-system-component";

function clientCode() {
    let mainFolder: FileSystemComponent = new FolderComponent("Year2021");

    let subFolder1: FileSystemComponent = new FolderComponent("Jan2021");
    let folder1File1: FileSystemComponent = new FileComponent("Jan1DataFile.txt", 4000);
    let folder1File2: FileSystemComponent = new FileComponent("Jan2DataFile.txt", 6000);

    let subFolder2: FileSystemComponent = new FolderComponent("Feb2021");
    let folder2File1: FileSystemComponent = new FileComponent("Feb1DataFile.txt", 3000);
    let folder2File2: FileSystemComponent = new FileComponent("Feb2DataFile.txt", 5000);

    mainFolder.addComponent(subFolder1);
    mainFolder.addComponent(subFolder2);

    subFolder1.addComponent(folder1File1);
    subFolder1.addComponent(folder1File2);

    subFolder2.addComponent(folder2File1);
    subFolder2.addComponent(folder2File2);

    console.log("Main Folder: " + mainFolder.getName() + " ** Size=" + mainFolder.getComponentSize() + "Kb");
    console.log(" SubFolder1: " + subFolder1.getName() + " ** Size=" + subFolder1.getComponentSize() + "Kb");
    console.log("   File1 in SubFolder1: " + folder1File1.getName() + " ** Size=" + folder1File1.getComponentSize() + "Kb");
    console.log("   File2 in SubFolder1: " + folder1File2.getName() + " ** Size=" + folder1File2.getComponentSize() + "Kb");
    console.log(" SubFolder2: " + subFolder2.getName() + " ** Size=" + subFolder2.getComponentSize() + "Kb");
    console.log("   File1 in SubFolder2: " + folder2File1.getName() + " ** Size=" + folder2File1.getComponentSize() + "Kb");
    console.log("   File2 in SubFolder2: " + folder2File2.getName() + " ** Size=" + folder2File2.getComponentSize() + "Kb");
}

clientCode();