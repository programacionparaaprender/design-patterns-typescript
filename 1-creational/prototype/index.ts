import {Prototype} from "./prototype";
import {CircularReference} from "./circular-reference";

function clientCode() {
    const prototype1: Prototype = new Prototype();
    prototype1.primitive = 245;
    prototype1.component = new Date();
    prototype1.circularReference = new CircularReference(prototype1);
    const prototype2: Prototype = prototype1.clone();
    if (prototype1 === prototype2) {
        console.log('Same object reference.');
    } else {
        console.log('Different object reference.');
    }
    if (prototype1.component === prototype2.component) {
        console.log('Simple component has NOT been cloned.');
    } else {
        console.log('Simple component has been cloned, different object reference.');
    }
    if (prototype1.circularReference === prototype2.circularReference) {
        console.log('Component with back reference has NOT been cloned.');
    } else {
        console.log('Component with back reference has been cloned, different object reference.');
    }
    if (prototype1.circularReference.prototype === prototype2.circularReference.prototype) {
        console.log('Component with back reference is linked to original object.');
    } else {
        console.log('Component with back reference is linked to the clone, different object reference.');
    }
}

clientCode();