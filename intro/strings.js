// Task: Реализуйте функцию reverse, которая переворачивает строку.
// Например:
reverse('hello, world!'); // !dlrow ,olleh

// Solution:

const reverse = (str) => {
  let i = str.length - 1;
  let result = '';

  while (i >= 0) {
    result += str[i];
    i -= 1;
  }
  return result;
};

console.log(reverse('hello, world!')); // !dlrow ,olleh