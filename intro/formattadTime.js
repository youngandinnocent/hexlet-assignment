/*
 Task: Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход количество минут (прошедших с начала суток) и возвращает строку,
 являющуюся временем в формате чч:мм. Используйте функцию Math.floor(number) для округления до нижней границы
*/

// Solution:

const formattedTime = (number) => {
  const day = Math.floor(number / 1440) + 1;

  const minute = number > 1440 ? number - (Math.floor(number / 1440) * 1440) : number;

  const hours = Math.floor(minute / 60);
  const formattedHours = hours < 10 ? `0${hours}` : hours;

  const minutes = minute - (Math.floor(minute / 60) * 60);
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${formattedHours}:${formattedMinutes}, day ${day}`;
};

formattadTime(7754); // '09:14, day 6'
