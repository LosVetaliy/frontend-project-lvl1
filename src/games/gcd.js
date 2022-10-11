import gamePattern from '../index.js';
import getRandomNumber from '../mathRandom.js';

const description = 'Find the greatest common divisor of given numbers.';
const gcd = (number1, number2) => (number1 !== 0 ? gcd(number2 % number1, number1) : number2);

const game = () => {
  const maxNumber = 11;
  const number1 = getRandomNumber(maxNumber);
  const number2 = getRandomNumber(maxNumber);
  const answer = String(gcd(number1, number2));
  const question = `${number1} ${number2}`;
  return [question, answer];
};
export default () => {
  gamePattern(description, game);
};
