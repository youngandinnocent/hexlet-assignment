/*
* Task:
*    Игра в 15 или пятнашки — популярная головоломка, придуманная в 1878 году Ноем Чепмэном.
*    Представляет собой набор одинаковых квадратных костяшек с нанесёнными числами,
*    заключённых в квадратную коробку. Длина стороны коробки в четыре раза больше длины
*    стороны костяшек для набора из 15 элементов, соответственно в коробке остаётся
*    незаполненным одно квадратное поле. Цель игры — перемещая костяшки по коробке,
*    добиться упорядочивания их по номерам, желательно сделав как можно меньше перемещений.
*
*        | 9  | 2  | 12 | 7  |
*        |----|----|----|----|
*        | 6  | 15 | 10 | 1  |
*        |----|----|----|----|
*        | 13 | 14 | 5  | 3  |
*        |----|----|----|----|
*        | 11 | 8  | 4  |    |
*
*
*    Реализуйте эту игру внутри функции, экспортируемой по-умолчанию, учитывая следующие моменты:
*        1.Перемещение происходит по клику. Если номер, на котором был клик, находится рядом
*          с пустой областью, то он перемещается на эту область. Если пустой области рядом нет,
*          то ничего не происходит.
*        2.При перемещении числа, из текущей ячейки удаляется класс table-active и добавляется
*          на ту, откуда происходит перемещение (та что становится пустой).
*        3.В файле уже заданы values, в том порядке в котором они должны появляться в выводе.
*          Для упрощения тестирования, этот порядок всегда один и тот же.
*        4.В файле index.html находится div с классом gem-puzzle, именно к нему нужно
*          привязывать игру.
*/


// Solution:

const values = [9, 6, 13, 11, 2, 15, 14, 8, 12, 10, 5, 4, 7, 1, 3];

const generatePlayingField = () => {
  const tableEl = document.createElement('table');

  tableEl.className = 'table-bordered';
  for (let i = 0; i < 4; i += 1) {
    const row = tableEl.insertRow();
    for (let j = 0; j < 4; j += 1) {
      const cell = row.insertCell();
      cell.className = 'p-3';
      if (i === 3 && j === 3) {
        cell.classList.add('table-active');
      } else {
        cell.textContent = values[i + (j * 4)];
      }
    }
  }
  return tableEl;
};

// BEGIN (write your solution here)
const getDistance = (a, b) => Math.abs(a.x - b.x) + Math.abs(a.y - b.y);

export default () => {
  let currentPosition = { x: 3, y: 3 };
  const tableEl = generatePlayingField();

  tableEl.addEventListener('click', (e) => {
    const nextCell = e.target;
    const { cellIndex, parentElement: { rowIndex } } = nextCell;
    const newPosition = { x: cellIndex, y: rowIndex };
    const distance = getDistance(currentPosition, newPosition);
    if (distance !== 1) {
      return;
    }
    const currentCell = tableEl.rows[currentPosition.y].cells[currentPosition.x];
    currentCell.textContent = nextCell.textContent;
    currentCell.classList.remove('table-active');
    nextCell.textContent = '';
    nextCell.classList.add('table-active');
    currentPosition = { x: cellIndex, y: rowIndex };
  });

  const div = document.querySelector('.gem-puzzle');
  div.append(tableEl);
};
// END
