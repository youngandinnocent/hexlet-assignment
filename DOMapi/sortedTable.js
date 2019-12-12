/*
Сделать таблицу сортируемой: при клике на элемент <th> строки таблицы должны
сортироваться по соответствующему столбцу. Каждый элемент <th> имеет атрибут data-type:
    <table id="grid">
        <thead>
            <tr>
                <th data-type="number">Возраст</th>
                <th data-type="string">Имя</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>5</td>
                <td>Вася</td>
            </tr>
            <tr>
                <td>10</td>
                <td>Петя</td>
            </tr>
            ...
        </tbody>
    </table>

В примере выше первый столбец содержит числа, а второй – строки. Функция сотрировки
должна это учитывать, ведь числа сортируются иначе, чем строки.
Сортировка должна поддерживать только типы "string" и "number".
*/

// Solution:

const sort = (i) => ({
  number: (coll) => coll
    .sort((a, b) => a.cells[i].innerHTML - b.cells[i].innerHTML),
  string: (coll) => coll
    .sort((a, b) => (a.cells[i].innerHTML > b.cells[i].innerHTML ? 1 : -1)),
});

// eslint-disable-next-line no-undef
const table = document.getElementById('grid');
table.addEventListener('click', (e) => {
  const th = e.target;
  if (!th.dataset.type) {
    return;
  }
  const tbody = table.querySelector('tbody');
  const { type } = th.dataset;
  const sorted = sort(th.cellIndex)[type]([...tbody.rows]);
  tbody.append(...sorted);
});
