/*
* Task:
*   Реализуйте и экспортируйте функцию reduce для библиотеки html-tags
*   
*   Реализуйте и экспортируйте функцию emptyTagsCount, которая считает количество пустых тегов.
*   Тип тега задается первым параметром функции.
*/


// Solutions:

import { isEmpty, head, tail } from '@hexlet/pairs-data';
import { getValue, is } from '@hexlet/html-tags';

//V1.0 recursive reduce function
export const reduce = (func, acc, elements) => {
    if (isEmpty(elements)) {
        return acc;
    }
    return reduce(func, func(head(elements), acc), tail(elements));
};

//V1.1 iterative reduce function
export const reduce = (func, acc, html) => {
    const iter = (items, count) => {
        if (isEmpty(items)) {
            return count;
        }
        return iter(tail(items), func(head(items), count));
    };
    return iter(html, acc);
};

//V2.0 emptyTagsCount funcyion
export const emptyTagsCount = (tag, html) => {
    const predicate = element => is(tag, element) && getValue(element) === '';
    const func = (element, acc) => (predicate(element) ? acc + 1 : acc);
    return reduce(func, 0, html);
};

