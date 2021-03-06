/* Task: Рассмотрим задачу представления отрезков на прямой плоскости. Каждый отрезок представляется
    как пара точек: начало и конец. Он может быть описан, например, так: [(1, 3), (5, 4)].
    Это означает, что наш отрезок начинается в точке (1, 3) и заканчивается в точке (5, 4)
    координатной плоскости.
    В этом задании необходимо разработать абстракцию для работы с отрезками (англ. segment),
    которая позволяет строить их из точек, извлекать из отрезков составные части (начало или
    конец сегмента), а также получать текстовое представление сегмента.
    Абстракция заключается в том, что конкретное представление сегмента определяется внутри
    функций, описывающих работу с отрезками и зависит от создателя библиотеки.
    С точки зрения клиента библиотеки (кода который ее вызывает), не важно как конкретно устроен
    сегмент, важно только то, что есть некоторый набор функций (абстракция), позволяющий работать
    с ним.

    Определите и экспортируйте следующие функции:
    1. Конструктор makeSegment, который принимает на вход две точки и возвращает сегмент.
    Первая точка это начало сегмента, вторая это конец.
    2. Селекторы startSegment и endSegment, которые извлекают из сегмента его начальную и конечную
    точку соответственно.
    3. Вспомогательную функцию segmentToString, которая возвращает текстовое представление
    сегмента: [(1, 2), (-4, -2)].
    4. Функцию midpointSegment, которая находит точку на середине отрезка
    по формулaм: x = (x1 + x2) / 2 и y = (y1 + y2) / 2.
*/


// Solurion:

import {
    makePoint, getX, getY, toString as pointToString,
  } from 'hexlet-points';
  import { cons, car, cdr } from 'hexlet-pairs';
  
  // BEGIN (write your solution here)
  export const makeSegment = (point1, point2) => cons(point1, point2);
  
  export const startSegment = segment => car(segment);
  
  export const endSegment = segment => cdr(segment);
  
  export const segmentToString = segment => `[${pointToString(startSegment(segment))}, ${pointToString(endSegment(segment))}]`;
  
  export const midpointSegment = (segment) => {
    const firstPart = startSegment(segment);
    const secondPart = endSegment(segment);
    const mX = (getX(firstPart) + getX(secondPart)) / 2;
    const mY = (getY(firstPart) + getY(secondPart)) / 2;
    return makePoint(mX, mY);
  };

  