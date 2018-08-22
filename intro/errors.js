// Task 1: Сделайте так, чтобы код внутри функции reference порождал ошибку типа ReferenceError

// Solution:

const reference = () => {
  const a = 1;
  const b = a * c;
};


// Task 2: Сделайте так, чтобы код внутри функции type порождал ошибку типа TypeError

// Solution:

const type = () => {
  let a = 0;
  return a();
};