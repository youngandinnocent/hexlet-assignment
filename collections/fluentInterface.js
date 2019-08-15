/*
* Task:
*   Реализуйте класс Enumerable для работы с коллекцией.
*   Реализуйте методы:
*       1) select, который отображает (принцип работы как у функции map) коллекцию, другими словами, извлекает из элементов коллекции нужные данные и возвращает объект с новой (отображенной) коллекцией из этих данных.
*       2) where, который фильтрует коллекцию заданной функции и возвращает новую;
*       3) orderBy, который сортирует коллекцию на основе переданных данных.
*           Принимаемые параметры:
*           1. Функция, возвращающая значение, по которому будет происходить сортировка.
*           2. Направление сортировки: asc - по возрастанию, desc - по убыванию (по умолчанию - asc).
*/


// Solution:
class Enumerable {
    constructor(collection) {
        this.collection = collection;
    }
    
    select(fn) {
        this.collection = this.collection.map(fn);
        return this;
    }

    orderBy(fn, derection = 'asc') {
        const compareResult = derection === 'asc' ? 1 : -1;
        const comparator = (a, b) => {
            if (fn(a) > fn(b)) {
                return compareResult;
            }
            if (fn(a) < fn(b)) {
                return -compareResult;
            }
            return 0;
        };
        this.collection.sort(comparator);
        return this;
    }
  
    where(fn) {
        this.collection = this.collection.filter(fn);
        return this;
    }

    toArray() {
        return this.collection.slice();
    }
}

export default Enumerable;
  