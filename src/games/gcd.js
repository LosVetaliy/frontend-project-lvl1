// eslint-disable-next-line import/extensions
import gamePattern from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';
const gcd = (number1, number2) => {
  if (number1 === 0) { return number2; }
  while (number2 !== 0) {
    if (number1 > number2) {
      // eslint-disable-next-line no-param-reassign
      number1 -= number2;
    } else {
      // eslint-disable-next-line no-param-reassign
      number2 -= number1;
    }
  }
  return number1;
};
const game = () => {
  const number1 = Math.floor(Math.random() * 11);
  const number2 = Math.floor(Math.random() * 11);
  const answer = String(gcd(number1, number2));
  const question = `${number1} ${number2}`;
  return [question, answer];
};
const gcdGame = () => {
  gamePattern(description, game);
};
export default gcdGame;
