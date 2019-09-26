/*
* Task:
*    Напишите тесты для функции set(obj, path, value), которая возвращает и изменяет (или добавляет)
*    значение в объект по указанному пути. Функция мутирует объект.
*
*        const object = { a: [{ b: { c: 3 } }] };
*
*        set(object, 'a[0].b.c', 4);
*        console.log(object.a[0].b.c); // => 4
*
*        set(object, ['x', '0', 'y', 'z'], 5);
*        console.log(object.x[0].y.z); // => 5
*/


// Solution:

import { cloneDeep } from 'lodash';
import getFunction from '../functions';

const set = getFunction();

let obj;
let cloneObj;

beforeEach(() => {
  obj = { a: [{ b: { c: 3 } }] };
  cloneObj = cloneDeep(obj);
});

test('plain set', () => {
  set(obj, 'a', 'value');
  cloneObj.a = 'value';
  expect(obj).toEqual(cloneObj);
});

test('nested set', () => {
  set(obj, 'a[0].b.c', true);
  cloneObj.a[0].b.c = true;
  expect(obj).toEqual(cloneObj);
});

test('set new property', () => {
  set(obj, 'a[0].b.d', false);
  cloneObj.a[0].b.d = false;
  expect(obj).toEqual(cloneObj);
});

