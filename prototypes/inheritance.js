/*
* Task:
*    Node.js
*    Реализуйте базовый класс Node таким чтобы он содержал в себе общую логику
*
*    PairedTag.js, SingleTag.js
*    Реализуйте типы тегов как подтипы типа Node.
*/


// Solution:

// Node class
export default class {
    constructor(name, attributes = {}) {
        this.name = name;
        this.attributes = attributes;
    }
  
    getAttributes() {
        return Object.entries(this.attributes)
            .map(([key, value]) => ` ${key}="${value}"`)
            .join('');
    }
}

// PairedTag subclass
import Node from './Node';

export default class extends Node {
    constructor(name, attributes, body = '', children = []) {
        super(name, attributes);
        this.body = body;
        this.children = children;
    }
    
    toString() {
        const value = this.children.length > 0
            ? this.children.join('')
            : this.body;
        return `<${this.name}${this.getAttributes()}>${value}</${this.name}>`;
    }
}

// SingleTag subclass
import Node from './Node';

export default class extends Node {
    toString() {
        return `<${this.name}${this.getAttributes()}>`;
    }
}

