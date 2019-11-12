/*
* Task:
*    Реализуйте и экспортируйте по умолчанию класс, который представляет собой
*    бесконечную последовательность. Объекты этого класса должны быть итерируемыми.

*        const seq = new Seq(1, x => x + 1);
*        const result = seq.skip(200).take(3);
*        for (const value of result) {
*        actual.push(value);
*        console.log(value);
*        }
*        // 201
*        // 202
*        // 203
*
*        // Можно обойти еще раз
*        for (const value of result) {
*        actual.push(value);
*        console.log(value);
*        }
*        // 201
*        // 202
*        // 203
*
*    Как видно из примера выше, методы класса построены с применением fluent interface.
*
*    Конструктор класса принимает на вход три параметра:
*        Стартовое значение последовательности
*        Функцию, которая генерирует новое значение последовательности на основе предыдущего
*        Количество элементов последовательности, по умолчанию последовательность
*        бесконечна (Infinity)
*        Также на классе определено две функции: skip(n) и take(m). Первая пропускает
*        первые n элементов, вторая ограничивает коллекцию m элементами.
*/


// Solution:

// eslint-disable-next-line import/no-unresolved
import '@babel/polyfill';

class Seq {
  constructor(start, next, size = Infinity) {
    this.start = start;
    this.next = next;
    this.size = size;
    this.current = start;
  }

  * [Symbol.iterator]() {
    const initialValue = this.current;
    for (let i = 0; i < this.size; i += 1) {
      yield this.current;
      this.current = this.next(this.current);
    }
    this.current = initialValue;
  }

  skip(size) {
    let newStart = this.current;
    for (let i = 0; i < size; i += 1) {
      newStart = this.next(newStart);
    }
    return new Seq(newStart, this.next, this.size);
  }

  take(size) {
    return new Seq(this.start, this.next, size);
  }
}

export default Seq;
