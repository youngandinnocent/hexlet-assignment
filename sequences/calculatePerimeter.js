/*
* Task:
*   Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход упорядоченный список точек,
*   являющихся вершинами многоугольника, вычисляет и возвращает периметр многоугольника.
*/


// Solution:

import { getX, getY } from '@hexlet/points';
import { isEmpty, head, tail } from '@hexlet/pairs-data';

// BEGIN
const isLessThenThree = (points) => {
  const iter = (list, acc) => {
    if (acc > 2) {
      return false;
    }
    return isEmpty(list) ? true : iter(tail(list), acc + 1);
  };
  return iter(points, 0);
};

const getSegmentLength = (point1, point2) => {
  const x1 = getX(point1);
  const x2 = getX(point2);
  const y1 = getY(point1);
  const y2 = getY(point2);
  return Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2));
};

export default (points) => {
  if (isLessThenThree(points)) {
    return null;
  }
  const startPoint = head(points);
  const iter = (list) => {
    const currentPoint = head(list);
    const rest = tail(list);
    if (isEmpty(rest)) {
      return getSegmentLength(currentPoint, startPoint);
    }
    const nextPoint = head(rest);
    return getSegmentLength(currentPoint, nextPoint) + iter(rest);
  };
  return iter(points);
};
// END
