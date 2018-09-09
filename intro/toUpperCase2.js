// Task:
 Реализуйте и экспортируйте по умолчанию функцию, которая делает заглавной первую букву каждого слова в предложении.

// Solution:

export default (str) => {
  let result = '';
  for (let i = 0; i < length(str); i += 1) {
    if (i === 0 || str[i - 1] === ' ') {
      result += toUpperCase(str[i]);
    } else {
      result += str[i];
    }
  }
  return result;
};
