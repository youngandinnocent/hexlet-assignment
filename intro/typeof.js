// Task: Реализуйте и экспортируйте по умолчанию функцию addDigits, которая работает следующим образом:
// Дано неотрицательное целое число num. Складывать все входящие в него цифры до тех пор, пока не останется одна цифра.
// Для числа 38 процесс будет выглядеть так:
3 + 8 = 11
1 + 1 = 2
Результат: 2

// Solution:

const sum = (str) => {
  let result = 0;
  for (let i = 0; i < length(str); i += 1) {
    result += Number(str[i]);
  }
  return result;
};

const addDigits = (num) => {
  let result = num;
  while (result > 9) {
    result = sum(String(result));
  }
  return result;
};

export default addDigits;

console.log(addDigits(1259)); // 8