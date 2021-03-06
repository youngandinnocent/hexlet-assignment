// Task: Реализуйте тело функции smallestDivisor, используя итеративный процесс.
// Эта функция должна находить наименьший делитель заданного числа.
// Доп. условия: число, передаваемое в функцию, больше нуля; делитель должен быть больше единицы,
// за исключением случая, когда аргументом является единица (наименьшим делителем которой является также единица).
// Идея алгоритма:
// 1.Попробуйте разделить число на 2.
// 2.Если число делится без остатка, то это наименьший делитель.
// 3.Если нет, то попробуйте следующий делитель.
// 4.Если ничего не делит число без остатка, то переданное число является простым, так что его наименьший делитель — оно само (не считая 1)

// Solution:

const smallestDivisor = (num) => {
   const iter = (acc) => {
    if (num === 1) {              // OR // if (acc > num / 2) {
      return 1;                         //   return num;       // This is the teacher's solution
    }
    if (num % acc === 0) {
      return acc;
    }
    return iter(acc + 1);
  };
  return iter(2);
};

console.log(smallestDivisor(17)); // 17
console.log(smallestDivisor(45)); // 3
