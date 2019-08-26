/*
* Task:
*   Реализуйте метод where, основываясь на следующем интерфейсе:
*       Функция может принимать любое количество параметров, каждый из которых может быть либо функцией,
*       либо объектом. Для функций должна осуществляться простая фильтрация, для объектов нужно проверять
*       соответствие элемента коллекции значениям по тем же ключам, что и в переданном объекте.
*/


// Solution:

// class Enumerable {

    // BEGIN (write your solution here)
    where(...theArgs) {
      const fns = theArgs.map((arg) => {
        if (typeof arg === 'function') {
          return coll => coll.filter(arg);
        }
  
        const keys = Object.keys(arg);
        return coll => coll.filter(car => keys.every(key => arg[key] === car[key]));
      });
      return this.build(fns);
    }
    // END
 
// export default Enumerable;
  