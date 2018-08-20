// Task: Реализуйте функцию squareOfSum, которая находит квадрат суммы двух чисел по формуле: a² + 2 * a * b + b²

// Solution:

// V1.1
const squareOfSum = (a, b) => (a * a) + (2 * a * b) + (b * b);

// V1.2
const squareOfSum = (a, b) => (a + b) * (a + b);