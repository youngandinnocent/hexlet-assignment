/*
* Task:
*   Реализуйте и экспортируйте функцию map для библиотеки html-tags.
*   Реализация должна быть построена с использованием итеративного процесса (без циклов, на основе рекурсии).
*   Параметры функции: первый — функция-трансформер, второй — коллекция (в нашем случае список html-тегов).

*   Реализуйте и экспортируйте функцию mirror, которая переворачивает содержимое тегов,
*   так чтобы читать его нужно было справа налево, а не слева направо.
*/


// Solution:

// V1.0 recursive map function

export const map = (func, html) => {
    if (isEmpty(html)) {
        return l();
    }
    return cons(func(head(html)), map(func, tail(html)));
};

// V1.1 iterative map function

export const map = (func, html) => {
    const iter = (items, acc) => {
        if (isEmpty(items)) {
            return reverse(acc);
        }
        return iter(tail(items), cons(func(head(items)), acc));
    };
    return iter(html, l());
};


// V2.0 mirror function

export const mirror = html => (
    map(element => node(getName(element), reverseStr(getValue(element))), html)
);