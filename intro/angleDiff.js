// Task: Напишите функцию diff, которая принимает два угла (integer), каждый от 0 до 360, и возвращает наименьшую разницу между ними.

// Solution:

V1.1 using the Math method
const diff = (a, b) => {
  const angle = Math.abs(a - b);
  return Math.min(angle, 360 - angle);
};
export default diff;


V1.2 low level solution
const diff = (angle1, angle2) => {
  let result;
  if ((angle1 >= 180 && angle2 >= 180) || (angle1 <= 180 && angle2 <= 180)) {
    result = (angle1 > angle2) ? angle1 - angle2 : angle2 - angle1;
  } else if (angle1 >= 180 && angle2 <= 180) {
    result = (angle1 - angle2 < (360 + angle2) - angle1) ? angle1 - angle2 : (360 + angle2) - angle1;
  } else if (angle1 <= 180 && angle2 >= 180) {
    result = (angle2 - angle1 < (360 + angle1) - angle2) ? angle2 - angle1 : (360 + angle1) - angle2;
  }
  return result;
};

export default diff;
diff(0, 190);//170