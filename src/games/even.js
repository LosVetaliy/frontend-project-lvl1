import gamePattern from '../index.js';
import getRandomNumber from '../mathRandom.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;
const game = () => {
  const maxNumber = 101;
  const number = getRandomNumber(maxNumber);
  const answer = isEven(number) ? 'yes' : 'no';
  return [number, answer];
};
export default () => {
  gamePattern(description, game);
};
