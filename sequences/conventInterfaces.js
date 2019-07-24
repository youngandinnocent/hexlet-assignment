/*
* Task:
*   Реализуйте и экспортируйте функцию extractHeaders, которая извлекает тексты всех заголовков h2
*   из переданного html и возвращает html в котором каждый из этих текстов обернут в p.
*   Например такой html в строковом представлении <h2>header1</h2><h2>header2</h2><p>content</p>
*   превратится в такой <p>header1</p><p>header2</p>.
*
*   Реализуйте и экспортируйте функцию wordsCount, которая считает вхождения слова в определенный тег.
*   Для подсчета слов в тексте одного тега воспользуйтесь вспомогательной функцией wc,
*   которая уже импортирована в модуль html-tags.
*/

// Solution:

import {
    node, getValue, is, map, filter, reduce,
} from '@hexlet/html-tags';
  
import { wc } from './utils';

// extractHeaders function
export const extractHeaders = (html) => {
    const filteredHtml = filter(element => is('h2', element), html);
    return map(element => node('p', getValue(element)), filteredHtml);
};

// wordsCount function
export const wordsCount = (tag, word, html) => {
    const filteredHtml = filter(element => is(tag, element), html);
    const values = map(element => getValue(element), filteredHtml);
    return reduce((text, acc) => wc(word, text) + acc, 0, values);
};