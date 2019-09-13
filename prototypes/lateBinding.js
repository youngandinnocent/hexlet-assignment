/*
* Task:
*    В этом упражнении реализация наших типов (Node и ее подтипов) будет опираться на следующие свойства js:
*        1. Функция это объект
*        2. Позднее связывание
*        3. Побочные эффекты (apply)
*
*    Node.js
*    Реализуйте базовый тип Node используя подход описанный в видео.
*
*    PairedTag.js, SingleTag.js
*    Реализуйте типы тегов как подтипы типа Node.
*
*    Подсказки
*    При определении функции внутри конструктора есть одна деталь. Функция создается каждый раз заново,
*    а это ведет к двум проблемам:
*        1. Лишний расход памяти. Ведь достаточно создать одну функцию и использовать ее повторно.
*        2. Сравнение объектов даже в случае deepEqual будет давать false. Ведь функция это объект, а объекты друг другу не равны (даже если структура одинаковая), если это не один и тот же объект. А это сильно затрудняет проверки на равенство деревьев (или поддеревьев), а также делает крайне сложным тестирование.
*    По этим причинам функцию нужно описывать вне конструктора (выше в файле), а внутри присваивать ее соответствующему свойству.
*/


// Solution:

// Node class
function getAttributes() {
    return Object.entries(this.attributes).map(([key, value]) => ` ${key}="${value}"`).join('');
}
  
export default function Node(name, attributes = {}) {
    this.name = name;
    this.attributes = attributes;
    this.getAttributes = getAttributes;
}

// PairedTag subclass
import Node from './Node';

function toString() {
    const childOrBodyValue = this.children.length > 0 ? this.children.join('') : this.body;
    return `<${this.name}${this.getAttributes()}>${childOrBodyValue}</${this.name}>`;
}

export default function PairedTag(name, attributes, body = '', children = []) {
    Node.apply(this, [name, attributes]);
    this.body = body;
    this.children = children;
    this.toString = toString;
}

// SingleTag class
import Node from './Node';

function toString() {
  return `<${this.name}${this.getAttributes()}>`;
}

export default function SingleTag(name, attributes) {
  Node.apply(this, [name, attributes]);
  this.toString = toString;
}

