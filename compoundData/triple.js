/*
Task:
    Кроме пар можно создавать абстрактные типы данных, которые содержат внутри себя три и более элемента.
    В данном испытании необходимо реализовать структуру данных тройка, позволяющую хранить три значения.
    Как и в случае с парами создаётся конструктор make и селекторы get1, get2, get3,
    которые будут извлекать соответствующие значения.

    triple.js
    Реализуйте и экспортируйте следующие функции:

    make
    get1
    get2
    get3
*/

// Solution:

export const make = (a, b, c) => f => f(a, b, c);
export const get1 = triple => triple(a => a);
export const get2 = triple => triple((a, b) => b);
export const get3 = triple => triple((a, b, c) => c);

const triple = make(3, 5, 'I am element from triple');
get1(triple); // 3
get2(triple); // 5
get3(triple); // I am element from triple
