/* Task: Реализуйте абстракцию (набор функций) для работы с прямоугольником, стороны которого
    всегда параллельны осям. Прямоугольник может располагаться в любом месте координатной плоскости.
    При такой постановке задачи достаточно знать только три параметра для однозначного задания
    прямоугольника на плоскости: координаты левой-верхней точки, ширину и высоту. Зная их, мы
    всегда можем построить прямоугольник одним единственным способом.
        |
        4 |    точка   ширина
        |       *-------------
        3 |       |            |
        |       |            | высота
        2 |       |            |
        |       --------------
        1 |
        |
    ------|---------------------------
        0 |  1   2   3   4   5   6   7
        |
        |
        |
    Основной интерфейс:
    makeRectangle (конструктор) - создаёт прямоугольник. Принимает параметры: левую-верхнюю точку,
    ширину и высоту.
    Селекторы getStartPoint, getWidth и getHeight

    Вспомогательные функции для выполнения расчетов:
    square - возвращает площадь прямоугольника (a * b).
    perimeter - возвращает периметр прямоугольника (2 * (a + b)).
    containsTheOrigin - проверяет, принадлежит ли центр координат прямоугольнику (не лежит на
    границе прямоугольника, а находится внутри). Чтобы в этом убедиться, достаточно проверить,
    что все вершины прямоугольника лежат в разных квадрантах (их можно вычислить в момент проверки).
    Так как это интерфейсные функции, то они должны быть экспортированы. Если этого не сделать,
    система модулей js не даст ими воспользоваться.
*/


// Solution:

// eslint-disable-next-line
import { makePoint, getX, getY, quadrant, toString as pointToString } from 'hexlet-points';
// eslint-disable-next-line
import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs';


export const makeRectangle = (point, width, height) => cons(point, cons(width, height));

export const getStartPoint = rectangle => car(rectangle);
export const getWidth = rectangle => car(cdr(rectangle));
export const getHeight = rectangle => cdr(cdr(rectangle));

export const square = rectangle => getWidth(rectangle) * getHeight(rectangle);
export const perimeter = rectangle => 2 * (getWidth(rectangle) + getHeight(rectangle));

export const containsTheOrigin = (rectangle) => {
  const h1 = getStartPoint(rectangle);
  const h3 = makePoint(getX(h1) + getWidth(rectangle), getY(h1) - getHeight(rectangle));
  return (quadrant(h1) === 2 && quadrant(h3) === 4);
};
