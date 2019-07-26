/*
* Task:
*   Реализуйте и экспортируйте по умолчанию функцию select, которая принимает на вход имя тега и
*   html список, а возвращает список всех нод, соответствующих имени. Ноды возвращаются в том виде,
*   в котором они представлены в дереве. Порядок, в котором ноды возвращаются — не важен.
*
*   Эту задачу можно решить разными способами, алгоритм самого простого выглядит так:
*       1. Проходимся по списку нод редьюсом, который собирает результирующий список.
*       2. Если текущая нода содержит детей, то запускаем select рекурсивно для детей,
*          а результат вызова добавляем в аккумулятор.
*       3. Если текущая нода соответствует тому, что мы ищем, добавляем её в аккумулятор.
*/


// Solution:

import { /* eslint-disable */
    l, cons as consList, isList, isEmpty, head, tail, concat, toString as listToString,
} from '@hexlet/pairs-data';

import {
    is, hasChildren, children, filter, reduce, toString as htmlToString,
} from '@hexlet/html-tags'; /* eslint-enable */

// BEGIN
const select = (tagName, html) => reduce((element, acc) => {
    const acc2 = hasChildren(element) ? concat(select(tagName, children(element)), acc) : acc;
    return is(tagName, element) ? consList(element, acc2) : acc2;
}, l(), html);

export default select;
// END