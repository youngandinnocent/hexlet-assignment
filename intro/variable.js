// Task: Напишите функцию smallestDivisor.
// Она должна находить наименьший целый делитель числа.
// Поведение у функции должно быть таким же, как в предыдущем уроке, но реализация — код функции — должно быть другим.
// На этот раз реализуйте императивный итеративный процесс, что означает:
// 1) не используйте рекурсию
// 2) используйте переменные
// 3) используйте цикл while
// Замечание: Если переданное в smallestDivisor число меньше единицы, возвращайте NaN.
// Идея алгоритма:
// Попробуйте разделить число на 2.
// Если число делится без остатка, то это наименьший делитель.
// Если нет, то попробуйте следующий делитель.
// Если ничего не делит число без остатка, то переданное число является простым,
// так что его наименьший делитель — оно само (не считая 1)

// Solution:

const smallestDivisor = (num) => {
  if (num < 1) {
    return NaN;
  } else if (num === 1) {
    return 1;
  }
  let div = 2;

  while (num % div > 0) {
    div += 1;
  }
  return div;
};

console.log(smallestDivisor(49)); // 7