"use strict";
exports.__esModule = true;
var folder_component_1 = require("./composite/folder-component");
var file_component_1 = require("./leaf/file-component");
function clientCode() {
    var mainFolder = new folder_component_1.FolderComponent("Year2021");
    var subFolder1 = new folder_component_1.FolderComponent("Jan2021");
    var folder1File1 = new file_component_1.FileComponent("Jan1DataFile.txt", 4000);
    var folder1File2 = new file_component_1.FileComponent("Jan2DataFile.txt", 6000);
    var subFolder2 = new folder_component_1.FolderComponent("Feb2021");
    var folder2File1 = new file_component_1.FileComponent("Feb1DataFile.txt", 3000);
    var folder2File2 = new file_component_1.FileComponent("Feb2DataFile.txt", 5000);
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
