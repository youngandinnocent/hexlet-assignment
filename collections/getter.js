/*
* Task:
*   1.Реализуйте метод toArray, возвращающий массив обработанных элементов коллекции. Мемоизируйте
*     этот массив во внутреннем свойстве memo.
*   2.Реализуйте свойство length, которое возвращает количество элементов в коллекции. Так как для
*     вычисления её длины, нужно получить результирующий массив (применив все отложенные операции),
*     логично реализовать это свойство как getter, который вызывает внутри себя toArray.
*/


// Soluion:

// class Enumerable {

    getProcessedCollection() {
        if (!this.memo) {
            this.memo = this.operations.reduce((acc, func) => func(acc), this.collection);
        }
        return this.memo;
    }
  
    get length() {
        return this.getProcessedCollection().length;
    }
  
    toArray() {
        return this.getProcessedCollection().slice();
    }
  
// export default Enumerable;
