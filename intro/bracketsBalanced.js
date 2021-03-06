/*
 Task: Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход строку, состоящую только из открывающих и
 закрывающих круглых скобок, и проверяет является ли эта строка корректной. Пустая строка (отсутствие скобок) считается корректной.
 Строка считается корректной (сбалансированной), если содержащаяся в ней скобочная структура соответствует требованиям:
  1. Скобки — это парные структуры. У каждой открывающей скобки должна быть соответствующая ей закрывающая скобка.
  2. Закрывающая скобка не должна идти впереди открывающей.
*/


// Solution:

const brackets = (str) => {
  let balance = 0;

  for (let i = 0; i < str.length; i += 1) {
    balance += (str[i] === '(') ? 1 : -1;
    if (balance < 0) {
      return false;
    }
  }
  return balance === 0;
};

export default brackets;
brackets('())))((('); //false