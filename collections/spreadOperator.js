/*
* Task:
*   Реализуйте и экспортируйте по умолчанию функцию, которая работает следующим образом:
*       Принимает на вход список (в виде обычного js массива с объектами внутри) и функцию-селектор,
*       выбирающую из каждого объекта определенное значение.
*       Возвращает объект, в котором ключ - это результат применения функции селектора к каждому объекту
*       в массиве, а значение - это сам объект.
*       Обратите внимание на то, что эта функция высшего порядка является универсальной и работает с любыми
*       наборами данных.
*/


// Solution:

export default (coll, selector) => coll.reduce(
    (acc, element) => ({ ...acc, [selector(element)]: element }), { },
);