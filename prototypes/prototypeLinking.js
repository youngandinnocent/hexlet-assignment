
//    Task:
//        Реализуйте тип Node.js, используя прототип.
//        Реализуйте прототипное наследование от типа Node: PairedTag.js, SingleTag.js


// Solution:

// Node.js
export default function Node(name, attributes = {}) {
    this.name = name;
    this.attributes = attributes;
}
  
Node.prototype.getAttributes = function getAttributes() {
    return Object.entries(this.attributes).map(([key, value]) => ` ${key}="${value}"`).join('');
};

// PairedTag.js
import Node from './Node';

export default function PairedTag(name, attributes, body = '', children = []) {
    Node.apply(this, [name, attributes]);
    this.body = body;
    this.children = children;
}

PairedTag.prototype = Object.create(Node.prototype);

PairedTag.prototype.toString = function toString() {
    const value = this.children.length > 0 ? this.children.map((child) => child.toString()).join('') : this.body;
    return `<${this.name}${this.getAttributes()}>${value}</${this.name}>`;
};

// SingleTag.js
import Node from './Node';

export default function SingleTag(name, attributes = {}) {
    Node.apply(this, [name, attributes]);
}

SingleTag.prototype = Object.create(Node.prototype);

SingleTag.prototype.toString = function toString() {
    return `<${this.name}${this.getAttributes()}>`;
};


