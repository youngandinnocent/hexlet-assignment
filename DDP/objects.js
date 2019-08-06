//Task:
//    Реализуйте интерфейс типа simpleCard и percentCard.

// Solution:

// simpleCard
const make = (name, damagePoints) => (message) => {
    switch (message) {
        case 'getName':
            return name;
        case 'damage':
            return damagePoints;
        default:
            return 'undefined method';
    }
};
  
export default make;

// percentCard
const make = (name, percent) => (message, health) => {
    switch (message) {
        case 'getName':
            return name;
        case 'damage':
            return Math.round(health * (percent / 100));
        default:
            return 'undefined method';
    }
};
  
export default make;
