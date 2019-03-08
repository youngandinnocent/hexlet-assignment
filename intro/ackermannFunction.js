// Task: Реализуйте и экспортируйте по умолчанию функцию Аккермана.

// Solution:

const ackermann = (m, n) => {
  if (m === 0) {
    return n + 1;
  }
  if (m > 0 && n === 0) {
    return ackermann(m - 1, 1);
  }
  if (m > 0 && n > 0) {
    return ackermann(m - 1, ackermann(m, n - 1));
  }
};
export default ackermann;

ackermann(3, 10); // 8189