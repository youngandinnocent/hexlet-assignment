/*
 Task:
 Экспортируйте функцию по умолчанию, которая находит наибольший общий делитель двух целых положительных чисел.
 Наибольшим общим делителем (НОД) для двух целых чисел m и n называется наибольший из их общих делителей.
 Пример: для чисел 70 и 105 наибольший общий делитель равен 35. Наибольший общий делитель существует и однозначно
 определён, если хотя бы одно из чисел m или n не равно нулю.
*/

// Solution:

//V1.1
export default (m, n) => {
  if (m <= 0 && n <= 0) {
    return NaN;
  }
  if (m >= n) {
    let result = n;
    while (m % result !== 0 || n % result !== 0) {
      result -= 1;
    }
    return result;
  } else if (m < n) {
    let result = m;
    while (m % result !== 0 || n % result !== 0) {
      result -= 1;
    }
    return result;
  }
};

//V1.2
export default (m, n) => {
  if (m <= 0 && n <= 0) {
    return NaN;
  }
  let result = (m > n) ? m : n;

  while (m % result !== 0 || n % result !== 0) {
    result -= 1;
  }
  return result;
};
