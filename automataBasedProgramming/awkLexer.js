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
