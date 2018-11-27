// Task: Напишите функцию diff, которая принимает два угла (integer), каждый от 0 до 360, и возвращает наименьшую разницу между ними.

// Solution:

const diff = (angle1, angle2) => {
  const diff1 = angle2 - angle1;
  const diff2 = (360 + angle1) - angle2;
  return (diff1 < diff2 ? diff1 : diff2);
};

diff(0, 190);//170