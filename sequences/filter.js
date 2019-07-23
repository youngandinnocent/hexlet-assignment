/*
* Task:
*   Реализуйте и экспортируйте функцию filter для библиотеки html-tags, используя итеративный процесс
*   Реализуйте и экспортируйте функцию quotes, которая извлекает из html тексты цитат и возвращает список цитат
*/


// Solution:

import {
    l, isEmpty, head, tail, cons, reverse,
} from '@hexlet/pairs-data';

import { getValue, is, map } from '@hexlet/html-tags';
  
// V1.0 recursive filter function
export const filter = (func, html) => {
    if (isEmpty(html)) {
        return l();
    }
    if (func(head(html))) {
        return cons(head(html), filter(func, tail(html)));
    }
    return filter(func, tail(html));
};

// V1.1 iterative filter function
export const filter = (func, html) => {
    const iter = (items, acc) => {
        if (isEmpty(items)) {
            return reverse(acc);
        }
        if (func(head(items))) {
            return cons(head(items), iter(tail(items), acc));
        }
        return iter(tail(items), acc);
    };
    return iter(html, l());
};

// V2.0 quotes function
export const quotes = html => (
    map(element => getValue(element), filter(element => is('blockquote', element), html))
);
