// Task: Реализуйте и экспортируйте по умолчанию функцию reverseInt, которая переворачивает цифры в переданном числе и возвращает новое число.

// Solution:


//V1.1 translation of a number into a string
const length = str => str.length;

const reverseInt = (num) => {
  const str = String(num);

  let result = '';
  let i = (str[0] === '-') ? 1 : 0;
  while (i < length(str)) {
    result = str[i] + result;
    i += 1;
  }
  return (str[0] === '-') ? -Number(result) : Number(result);
};

export default reverseInt;

reverse(-13786); //-68731



//V1.2 using the Math method
const length = str => str.length;

const reverseInt = (num) => {
  const str = String(Math.abs(num));

  let result = '';
  let i = str.length - 1;
  while (i >= 0) {
    result += str[i];
    i -= 1;
  }
  return num < 0 ? -Number(result) : Number(result);
};

export default reverseInt;