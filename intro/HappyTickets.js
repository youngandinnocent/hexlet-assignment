/*
 Счастливым билетом называют такой билет с шестизначным номером, где сумма первых трех цифр равна сумме последних трех.
 Например, билет с номером 385916 - счастливый, так как 3 + 8 + 5 = 9 + 1 + 6

 Напишите и экспортируйте по умолчанию функцию, проверяющую является ли номер счастливым (номер может быть как числового, так и строкового типа).
 Функция должна возвращать true, если билет счастливый, или false, если нет.
*/




//V.1.1 use for loop with two variables

const isHappyTicket = (strOrNum) => {
  const str = String(strOrNum);
  if (str.length % 2 !== 0) {
    return false;
  }

  let result = 0;
  for (let i = 0, j = str.length - 1; i < j; i += 1, j -= 1) {
    result += Number(str[i]) - Number(str[j]);
  }

  return result === 0;
};

isHappyTickets(12384237223144); // true




//V1.2 use simple for loop

const isHappyTicket = (strOrNum) => {
  const str = String(strOrNum);
  if (str.length % 2 !== 0) {
    return false;
  }

  let result1 = 0;
  for (let i = 0; i < str.length / 2; i += 1) {
    result1 += Number(str[i]);
  }

  let result2 = 0;
  for (let i = str.length - 1; i >= str.length / 2; i -= 1) {
    result2 += Number(str[i]);
  }

  return result1 === result2;
};

isHappyTicket(128722); // true




//V3.1 use while loop

const isHappyTicket = (strOrNum) => {
  const str = String(strOrNum);
  if (str.length % 2 !== 0) {
    return false;
  }
  
  let result1 = 0;
  let result2 = 0;
  let i = 0;
  while (i < str.length / 2) {
    result1 += Number(str[i]);
    i += 1;
    result2 += Number(str[str.length - i]);
  }
  
  return result1 === result2;
};

isHappyTicket(12384237223144); // true
