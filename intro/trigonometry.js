/*
 Task: Реализуйте функцию которая считает площадь треугольника на основе известной стороны и прилегающих к ней углов.
 Углы задаются в градусах. Экспортируйте ее по умолчанию.

 Формула: если известна одна сторона треугольника и два прилежащих к ней угла, то площадь данного треугольника вычисляется, как
 половина квадрата данной стороны умноженная на дробь, в числителе которой, произведение синусов прилежащих углов, а в
 знаменателе синус противолежащего угла. Противолежащий угол вычисляется по формуле: 180 - сумма двух известных углов.
 
 Подсказки:
 Так как тригонометрические функции в Math работают с радианами, вам будет необходимо преобразовывать градусы в радианы.
 Напишите для этого вспомогательную функцию. Формула для расчета: градусы * пи / 180.
*/


// Solution:

// V1.1
const rad = a => a * (Math.PI / 180);

const triangleArea = (s, a1, a2) => (1/2 * s ** 2) * (Math.sin(rad(a1)) * Math.sin(rad(a2)) / Math.sin(Math.PI - rad(a1 + a2)));

export default triangleArea;

  
// V1.2
const triangleArea = (s, a1, a2) => ((Math.pow(s, 2) / 2) * (Math.sin(a1 * Math.PI / 180) * Math.sin(a2 * Math.PI / 180) / Math.sin((180 - (a1 + a2)) * Math.PI / 180)));

export default triangleArea;