/*
 Task:
 Функция calc представляет из себя простейший калькулятор, которому передается бинарная операция, а также два числа, а на выходе
 получается результат применения операции к этим числам.
 Реализуйте и экспортируйте по умолчанию функцию calc, аргументами которой являются:
  1. Операция в виде строки. Поддерживаются +, -, /,*.
  2. Первый операнд.
  3. Второй операнд.
 Если передается операция, которая не поддерживается, то функция должна вернуть NaN.
*/

// Solution:

const calc = (calculating, operand1, operand2) => {
  switch (calculating) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    case '/':
      return operand1 / operand2;
    case '%':
      return operand1 % operand2;
    default:
      return NaN;
  }
};
export default calc;
