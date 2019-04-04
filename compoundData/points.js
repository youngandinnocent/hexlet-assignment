/* Task: Реализуйте и экспортируйте следующие функции для работы с точками:

    getQuadrant - функция, которая вычисляет квадрант, в котором находится точка.
    Если точка не принадлежит ни одному квадранту (т.е., если она лежит хотя бы на одной из осей координат),
    то функция должна возвращать null:

    getSymmetricalPoint - функция, возвращающая новую точку, симметричную относительно начала координат.
    Такая симметричность означает, что меняются знаки у X и Y.

    calculateDistance - функция, вычисляющая расстояние между точками
    по формуле: d = sqrt((x2−x1)^2+(y2−y1)^2)
*/ 


// Solution

import { makePoint, getX, getY } from 'hexlet-points'; // eslint-disable-line

export const getQuadrant = (point) => {
  const x = getX(point);
  const y = getY(point);

  if (x > 0 && y > 0) {
    return 1;
  } else if (x < 0 && y > 0) {
    return 2;
  } else if (x < 0 && y < 0) {
    return 3;
  } else if (x > 0 && y < 0) {
    return 4;
  }
  return null;
};

export const getSymmetricalPoint = point => makePoint(-getX(point), -getY(point));

export const calculateDistance = (point1, point2) => {
  const disX = (getX(point2) - getX(point1)) ** 2;
  const disY = (getY(point2) - getY(point1)) ** 2;
  return Math.sqrt(disX + disY);
};
