/*
* Task:
*    buildNode.js
*    Реализуйте и экспортируйте функцию по умолчанию, задача которой, создавать объект подходящего типа.
*    Типы: SingleTag и PairedTag. Список имен тегов, которые относятся к SingleTag: hr, br, img.
*
*    PairedTag.js
*    Реализуйте тип PairedTag со следующим интерфейсом:
*        1. Конструктор, который принимает на вход: name, attributes, body, children.
*        2. Метод toString, который возвращает текстовое представление узла (html) на всю глубину.
*
*    SingleTag.js
*    Реализуйте тип SingleTag со следующим интерфейсом:
*        1. Конструктор, который принимает на вход: name, attributes
*        2. Метод toString, который возвращает текстовое представление узла (html) на всю глубину.
*/


// Solution:

// buildNode
import PairedTag from './PairedTag';
import SingleTag from './SingleTag';

const singleTagColl = new Set(['br', 'hr', 'img']);

export default (name, ...arg) => {
    const C = singleTagColl.has(name) ? SingleTag : PairedTag;
    return new C(name, ...arg);
};

// PairedTag
export default class {
    constructor(name, attributes = {}, body = '', children = []) {
        this.name = name;
        this.attributes = attributes;
        this.body = body;
        this.children = children;
    }
  
    getAttrsLine() {
        return Object.entries(this.attributes).map(([key, value]) => ` ${key}="${value}"`).join('');
    }
  
    toString() {
        const value = this.children.length > 0 ? this.children.join('') : this.body;
        return `<${this.name}${this.getAttrsLine()}>${value}</${this.name}>`;
    }
}

// SingleTag
export default class {
    constructor(name, attributes = {}) {
        this.name = name;
        this.attributes = attributes;
    }
  
    getAttrsLine() {
        return Object.entries(this.attributes).map(([key, value]) => ` ${key}="${value}"`).join('');
    }
  
    toString() {
        return `<${this.name}${this.getAttrsLine()}>`;
    }
}
  
