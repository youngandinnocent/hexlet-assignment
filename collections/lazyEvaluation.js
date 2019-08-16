/*
* Task:
*   Реализуйте ленивую версию Enumerable.
*   Интерфейс включает в себя следующие методы: select, where, orderBy, toArray.
*   Так как коллекция ленивая, не нужно выполнять вычислений до вызова toArray,
*   вместо этого необходимо формировать коллекцию из отложенных вычислений.
*/


// Solution:

class Enumerable {
    constructor(collection, operations) {
        this.collection = collection;
        this.operations = operations || [];
    }
    
    select(fn) {
        const newOps = this.operations.slice();
        newOps.push(car => car.map(fn));
        return new Enumerable(this.collection.slice(), newOps);
    }
  
    where(fn) {
        const newOps = this.operations.slice();
        newOps.push(car => car.filter(fn));
        return new Enumerable(this.collection.slice(), newOps);
    }
  
    orderBy(fn, direction = 'asc') {
        const newOps = this.operations.slice();
        const comparator = (a, b) => {
            const compareResult = direction === 'asc' ? 1 : -1;
            if (fn(a) > fn(b)) {
                return compareResult;
            }
            if (fn(a) < fn(b)) {
                return -compareResult;
            }
            return 0;
        };
        newOps.push(car => car.sort(comparator));
        return new Enumerable(this.collection.slice(), newOps);
    }
  
    toArray() {
        return this.operations.reduce((acc, func) => func(acc), this.collection);
    }
}
  
export default Enumerable;
  