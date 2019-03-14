// Task: Реализуйте и экспортируйте по умолчанию функцию partialApply.
// Эта функция умеет частично применять один (второй) аргумент у переданной функции.


// Solution:

export default (f, second) => first => f(first, second);
