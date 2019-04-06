/*
 Task: С точки зрения математики, композиция функций f и g - новая функция z = f(g(x)).
 Реализуйте и экспортируйте по умолчанию функцию compose, которая принимает на вход две других
 одноаргументных функции и возвращает новую функцию. Эта новая функция также принимает на вход один
 параметр и при вызове применяет его последовательно к переданным функциям в обратном порядке.
*/


// Solution:

export default (x, y) => a => x(y(a));
// compose(v => v - 2, v => v ** 2)(2); 2