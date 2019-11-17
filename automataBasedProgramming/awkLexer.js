/*
Task:
*    Реализуйте и экспортируйте функцию по умолчанию, которая принимает
*    на вход текст и возвращает массив состоящий из первых слов каждой
*    строки текста. Пустые строчки должны игнорироваться.
*        1.Строки разделяются переводом строки
*        2.В любом месте строки может быть сколько угодно пробелов
*        3.Текст должен перебираться посимвольно (мы пишем лексер)
*
*    const text = '  what who   \nhellomy\n hello who are you\n';
*    const result = solution(text);
*   [
*    'what',
*    'hellomy',
*    'hello',
*   ];
*/


// Solution1.0 with array:

export default (text) => {
  const result = [];
  let state = 'before';
  let word = [];
  Array.from(text).forEach((symbol) => {
    switch (state) {
      case 'before':
        if (symbol !== ' ' && symbol !== '\n') {
          word.push(symbol);
          state = 'inside';
        }
        break;
      case 'inside':
        if (symbol === ' ' || symbol === '\n') {
          result.push(word.join(''));
          word = [];
          state = symbol === ' ' ? 'after' : 'before';
        } else {
          word.push(symbol);
        }
        break;
      case 'after':
        if (symbol === '\n') {
          state = 'before';
        }
        break;
      default:
        throw new Error(`Unexpected state '${state}'`);
    }
  });

  if (word.length > 0) {
    result.push(word.join(''));
  }

  return result;
};

// Solution1.1 with for loop:

const fsm = (str) => {
  let result = '';
  let state = 'before';
  for (let i = 0; i < str.length; i += 1) {
    const symbol = str[i];
    switch (state) {
      case 'before':
        if (symbol !== ' ' && symbol !== '\n') {
          result += symbol;
          state = 'inside';
        }
        break;
      case 'inside':
        if (symbol !== ' ' && symbol !== '\n') {
          result += symbol;
        } else if (symbol === '\n') {
          result += symbol;
          state = 'before';
        } else {
          state = 'after';
        }
        break;
      case 'after':
        if (symbol === '\n') {
          result += symbol;
          state = 'before';
        }
        break;
      default:
        return undefined;
    }
  }
  return result;
};
  
export default (str) => fsm(str).split('\n').filter((word) => word !== '');
