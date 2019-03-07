/*
 Task: Реализуйте и экспортируйте по умолчанию функцию, которая выводит (console.log) в терминал числа в диапазоне от begin до end.
 При этом:
  1. Если число делится без остатка на 3, то вместо него выводится слово Fizz
  2. Если число делится без остатка на 5, то вместо него выводится слово Buzz
  3. Если число делится без остатка и на 3, и на 5, то вместо числа выводится слово FizzBuzz
  4. В остальных случаях выводится само число
 Функция принимает два параметра (begin и end), определяющих начало и конец диапазона (включительно).
 Для простоты считаем, что эти параметры являются целыми числами больше нуля.
 Если диапазон пуст (в случае, когда begin > end), то функция просто ничего не печатает.
*/



// Solution:

//V1.1 use ternary operator and interpolation
const fizzBuzz = (begin, end) => {
  for (let i = begin; i <= end; i += 1) {
    const fizz = (i % 3 === 0) ? 'Fizz' : '';
    const buzz = (i % 5 === 0) ? 'Buzz' : '';
    console.log(fizz || buzz ? `${fizz}${buzz}` : i);
  }
};

export default fizzBuzz;


//V1.2 use if condition
const fizzBuzz = (begin, end) => {
  if ((begin || end) <= 0) {
    return null;
  } else if (begin > end) {
    return;
  }
  for (let i = begin; i <= end; i += 1) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
};

fizzBuzz(1, 100);