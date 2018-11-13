/*
 Task: Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход количество минут (прошедших с начала суток) и возвращает строку,
 являющуюся временем в формате чч:мм. Используйте функцию Math.floor(number) для округления до нижней границы
*/

// Solution:

const formattadTime = (minutes) => {
  const day = String(Math.floor(minutes / 1440) + 1);
  if (minutes > 1440) {
    minutes = minutes - (Math.floor(minutes / 1440) * 1440);
  }
  const hours = (Math.floor(minutes / 60) < 10) ? `0${String(Math.floor(minutes / 60))}` : String(Math.floor(minutes / 60));
  const min = (minutes - (Math.floor(minutes / 60) * 60) < 10) ? `0${String(minutes - (Math.floor(minutes / 60) * 60))}` : String(minutes - (Math.floor(minutes / 60) * 60));
  return `${hours}:${min}, day ${day}`;
}

formattadTime(7754); // '09:14, day 6'
