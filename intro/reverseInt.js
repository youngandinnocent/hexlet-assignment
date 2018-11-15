// Task: Реализуйте и экспортируйте по умолчанию функцию reverseInt, которая переворачивает цифры в переданном числе и возвращает новое число.

// Solution:

const length = str => str.length;

const reverse = (number) => {
  const str  = String(number);
  let result = '';
  let i = (str[0] === '-') ? 1 : 0;
  while (i < length(str)) {
    result = str[i] + result;
    i += 1;
  }
  return result = (str[0] === '-') ? -Number(result) : Number(result);
};

reverse(-13786); //-68731