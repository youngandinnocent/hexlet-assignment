/*
 Task:
 Реализуйте и экспортируйте по умолчанию функцию reverse, которая переворачивает строку.
 Для подсчета длины строки используйте функцию length из модуля strings. Пример: length('cat'); // 3
*/

// Solution:

// V1.1
const reverse = (str) => {
  let result = '';

  for (let i = 0; i < length(str); i += 1) {
    result = str[i] + result;
  }
  return result;
};
export default reverse;

// V1.2
const reverse = (str) => {
  let result = '';

  for (let i = 1; i <= length(str); i += 1) {
    result += str[length(str) - i];
  }
  return result
};
export default reverse;
