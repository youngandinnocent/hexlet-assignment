// Task: Реализуйте и экспортируйте по умолчанию функцию invertCase, которая меняет в строке регистр каждой буквы на противоположный.

// Solution:

const length = str => str.length;
const toUpperCase = str => str.toUpperCase();
const toLowerCase = str => str.toLowerCase();

const invertcase = (str) => {
  let result = '';
  for (let i = 0; i < length(str); i += 1) {
    result += (str[i] === toUpperCase(str[i])) ? toLowerCase(str[i]) : toUpperCase(str[i]);
  }
  return result;
};

invertcase('I loVe JS'); // 'i LOvE js'