// Task:
//   Реализуйте типы тегов как подтипы типа Node: PairedTag.js, SingleTag.js
//   Добавьте необходимые функции в прототипы типов.


// Solution:

// PairedTag.js
import Node from './Node';

export default function PairedTag(name, attributes, body = '', children = []) {
  Node.apply(this, [name, attributes]);
  this.body = body;
  this.children = children;
}

PairedTag.prototype.toString = function toString() {
  const childOrBodyValue = this.children.length > 0 ? this.children.join('') : this.body;
  return `<${this.name}${this.getAttributes()}>${childOrBodyValue}</${this.name}>`;
};

// SingleTag.js
import Node from './Node';

export default function SingleTag(name, attributes = {}) {
  Node.apply(this, [name, attributes]);
}

SingleTag.prototype.toString = function toString() {
  return `<${this.name}${this.getAttributes()}>`;
};


