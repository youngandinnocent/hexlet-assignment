/*
* Task:
*   Реализуйте и экспортируйте:
*   1) функцию has, которая проверяет, является ли переданное значение элементом списка.
*   2) функцию reverse, которая переворачивает список, используя итеративный процесс.
*   3) функцию concat, которая соединяет два списка, используя рекурсивный процесс (попробуйте сначала представить,
*   как работала бы функция copy, которая принимает на вход список и возвращает его копию).
*/



// Solution:

export const has = (list, value) => {
    if (isEmpty(list)) {
      return false;
    }
    if (head(list) === value) {
      return true;
    }
    return has(tail(list), value);
};
const numbers = l(3, 4, 5, 8);
has(numbers, 8); // true
has(numbers, 0); // false


export const reverse = (list) => {
    const iter = (items, acc) => {
      console.log(listToString(items), listToString(acc));
      if (isEmpty(items)) {
        return acc;
      }
      return iter(tail(items), cons(head(items), acc));
    };
    return iter(list, l());
};
const numbers = l(3, 4, 5);
reverse(numbers); // (5, 4, 3)

  
export const concat = (list1, list2) => {
    if (isEmpty(list1)) {
      return list2;
    }
    return cons(head(list1), concat(tail(list1), list2));
};
const numbers = l(3, 4, 5, 8);
const numbers2 = l(3, 2, 9);
concat(numbers, numbers2); // (3, 4, 5, 8, 3, 2, 9)