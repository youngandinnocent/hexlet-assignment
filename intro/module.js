// Task 1: Создайте функцию getTriangleArea, которая принимает два аргумента h и b
// и вычисляет площадь треугольника по формуле A = 1/2 * h * b, где h — высота, а b — основание треугольника.
// Экспортируйте функцию.

// Solution 1:

export const getTriangleArea = (h, b) => {
  const area = (h * b) / 2;
  return area;
};

console.log(getTriangleArea(5, 10)); // 25



// Task 2: Импортируйте getTriangleArea из модуля myMathModule.
// Создайте функцию, которая принимает аргумент n и возвращает площадь треугольника высотой n и основанием n2/2.
// Используйте функцию square.
// Экспортируйте созданную функцию по умолчанию.

// Solution 2:

import { getTriangleArea } from './myMathModule';

const func = n => getTriangleArea(n, square(n) / 2);

export default func;


console.log(func(10)); // 250
