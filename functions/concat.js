// Task: Реализуйте и экспортируйте по умолчанию каррированую версию функции, которая принимает на вход три строки и возвращает
 новую строчку составленную из трех входных.


// Solution:

export default str1 => str2 => str3 => `${str1}${str2}${str3}`;

// concat('a')('bc')('f'); abcf