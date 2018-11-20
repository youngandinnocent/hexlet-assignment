/*
 Task: Реализуйте и экспортируйте функцию по умолчанию, которая переворачивает строку задом наперед, используя рекурсию.
 Чтобы получить подстроку из строки, используйте метод substr.
*/

// Solution:

const length = str => str.length;

const reverse = (str) => {
  if (length(str) < 1) {
    return str;
  }
  return str[length(str) - 1] + reverse(str.substr(0, length(str) - 1));
};

reverse('reverse'); //esrever
