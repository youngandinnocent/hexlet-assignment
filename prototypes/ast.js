/*
* Task:
*    Текущая версия htmlBuilder должна уметь работать и с одинарными тегами, и парными.
*
*    Реализуйте и экспортируйте функции parse и render.
*        1. Функция render принимает на вход ast и возвращает строковое представление.
*        2. Функция parse принимает на вход исходную структуру и возвращает представление в виде ast.
*        const data = ['html', [
*        ['meta', { id: 'uniq-key' }, [
*            ['title', 'hello, hexlet!'],
*        ]],
*        ['body', [
*            ['br'],
*        ]],
*        ]];
*
*        const ast = parse(data);
*
*        { name: 'html', attributes: {}, body: '', children: [
*        { name: 'meta', attributes: { id: 'uniq-key' }, body: '', children: [
*            { name: 'title', attributes: {}, body: 'hello, hexlet!', children: [] },
*        ]},
*        { name: 'body', attributes: {}, body: '', children: [
*            { name: 'br', attributes: {}, body: '', children: [] },
*        ]},
*        ]}
*/


// Solution:

// parse block
import { identity } from 'lodash';

const propertyActions = [
  {
    name: 'body',
    check: arg => typeof arg === 'string',
    process: identity,
  },
  {
    name: 'children',
    check: arg => arg instanceof Array,
    process: (children, f) => children.map(f),
  },
  {
    name: 'attributes',
    check: arg => arg instanceof Object,
    process: identity,
  },
];

const getPropertyActions = arg => propertyActions.find(({ check }) => check(arg));

const parse = (data) => {
  const [first, ...rest] = data;
  const root = {
    name: first,
    attributes: {},
    body: '',
    children: [],
  };
  return rest.reduce((acc, arg) => {
    const { name, process } = getPropertyActions(arg);
    return { ...acc, [name]: process(arg, parse) };
  }, root);
};

// render block
const singleTagColl = new Set(['br', 'hr', 'img']);

const render = (data) => {
  const {
    name,
    attributes,
    body,
    children,
  } = data;
  const attrsLine = Object.keys(attributes).map(key => ` ${key}="${attributes[key]}"`).join('');
  const childLine = children.length > 0 ? children.map(render).join('') : '';

  return singleTagColl.has(name) ? `<${name}${attrsLine}>` : `<${name}${attrsLine}>${body}${childLine}</${name}>`;
};


export { parse, render };

