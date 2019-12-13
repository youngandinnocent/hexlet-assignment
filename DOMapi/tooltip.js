/*
*    Напишите JS-код, реализующий поведение «подсказка».
*    При наведении мыши на элемент с атрибутом data-tooltip, над ним должна показываться
*    подсказка и скрываться при переходе на другой элемент.
*
*    Пример HTML с подсказками:
*        <button data-tooltip="эта подсказка длиннее, чем элемент">Короткая кнопка</button>
*        <button data-tooltip="HTML<br>подсказка">Ещё кнопка</button>
*
*    Детали оформления:
*        Отступ от подсказки до элемента с data-tooltip должен быть 5px по высоте.
*        Подсказка должна быть, по возможности, посередине элемента.
*        Подсказка не должна вылезать за границы экрана, в том числе если страница
*        частично прокручена, если нельзя показать сверху – показывать снизу элемента.
*        Текст подсказки брать из значения атрибута data-tooltip. Это может быть
*        произвольный HTML.
*/


// Solution:

// eslint-disable-next-line no-undef
const { body } = document;
body.addEventListener('mouseover', (e) => {
  const button = e.target;
  if (!button.dataset.tooltip) {
    return;
  }
  // eslint-disable-next-line no-undef
  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip';
  tooltip.innerHTML = button.dataset.tooltip;
  body.append(tooltip);

  const coords = button.getBoundingClientRect();
  let left = coords.left + (button.offsetWidth - tooltip.offsetWidth) / 2;
  if (left < 0) {
    left = 0;
  }

  let top = coords.top - tooltip.offsetHeight - 5;
  if (top < 0) {
    top = coords.top + button.offsetHeight + 5;
  }

  tooltip.style.left = `${left}px`;
  tooltip.style.top = `${top}px`;

  body.addEventListener('mouseout', () => {
    if (tooltip) {
      tooltip.remove();
    }
  });
});
