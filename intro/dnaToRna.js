/*
 Task: ДНК и РНК это последовательности нуклеотидов. Четыре нуклеотида в ДНК это аденин (A), цитозин (C), гуанин (G) и тимин (T).
 Четыре нуклеотида в РНК это аденин (A), цитозин (C), гуанин (G) и урацил (U). Цепь РНК составляется на основе цепи ДНК последовательной заменой каждого нуклеотида:
 G -> C
 C -> G
 T -> A
 A -> U
 Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход цепь ДНК и возвращает соответствующую цепь РНК (совершает транскрипцию РНК).
 Если во входном параметре нет ни одного нуклеотида (т.е. передана пустая строка), то функция должна вернуть пустую строку.
 Если в переданной цепи ДНК встретится "незнакомый" нуклеотид (не являющийся одним из четырех перечисленных выше), то функция должна вернуть null.
*/

// Solution:

//V1.1 use if condition
const dnatorna = (str) => {
  if (str === '') {
    return '';
  }
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === 'G') {
      result += 'C';
    } else if (str[i] === 'C') {
      result += 'G';
    } else if (str[i] === 'T') {
      result += 'A';
    } else if (str[i] === 'A') {
      result += 'U';
    } else {
      return null;
    }
  }
  return result;
};
export default dnatorna('ACGTGGTCTTAA');//UGCACCAGAAUU



//V1.2 use switch construct

const dnaToRna = (str) => {
  if (str === '') {
    return str;
  }
  let rna = '';
  for (let i = 0; i < str.length; i += 1) {
    switch (str[i]) {
      case 'G':
      rna += 'C';
      break;
      case 'C':
      rna += 'G';
      break;
      case 'T':
      rna += 'A';
      break;
      case 'A':
      rna += 'U';
      break;
      default:
      return null;
    }
  }
  return rna;
};

dnaToRna('ACGTGGTCTTAA'); //'UGCACCAGAAUU'