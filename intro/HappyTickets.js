/*
Счастливым билетом называют такой билет с шестизначным номером, где сумма первых трех цифр равна сумме последних трех.
Например, билет с номером 385916 - счастливый, так как 3 + 8 + 5 = 9 + 1 + 6

Напишите и экспортируйте по умолчанию функцию, проверяющую является ли номер счастливым (номер может быть как числового, так и строкового типа).
Функция должна возвращать true, если билет счастливый, или false, если нет.
Чтобы получить подстроку из строки, используйте метод substr:
'foo'.substr(1, 2); // 'oo';
*/


//V.1.1
//Проверка по любому номеру
const length = str => str.length;

const isHappyTickets = (value) => {
  const str = String(value);
  if (length(str) % 2 !== 0) {
    return false;
  }
  
  let result1 = 0;
  let result2 = 0;
  let i = 0;
  let i2 = 1;
  while (i < length(str) / 2) {
    result1 += Number(str[i]);
    i += 1;
    result2 += Number(str[length(str) - i]);
    i2 += 1;
  }
  if (result1 === result2) {
      return true;
    }
    return false;
};

isHappyTickets(12384237223144); // true


//V2.1
//Проверка по шестизначному номеру
const isHappyTickets = (value) => {
  const str = String(value);

  const result1 = Number(str[0]) + Number(str[1]) + Number(str[2]);
  const result2 = Number(str[3]) + Number(str[4]) + Number(str[5]);
  
  if (result1 === result2) {
    return true;
  }
  return false;
};

isHappyTickets(128722); // true


//V2.2
//Использование оператора substr
const isHappyTickets = (value) => {
  const str = String(value);

  const result = Number(str.substr(0, 1)) + Number(str.substr(1, 1)) + Number(str.substr(2, 1)) - Number(str.substr(3, 1)) - Number(str.substr(4, 1)) - Number(str.substr(5, 1));
  console.log(str.substr(4, 1));
  
  return (result === 0) ? true : false;
};

isHappyTickets(385916); // true