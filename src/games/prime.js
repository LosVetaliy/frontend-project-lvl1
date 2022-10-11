import gamePattern from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const getRandomArbitrary = (min, max) => Math.floor(Math.random() * (max - min) + min);
const prime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
const game = () => {
  const minNumber = 2;
  const maxNumber = 40;
  const number = getRandomArbitrary(minNumber, maxNumber);
  const question = String(number);
  const answer = prime(number) ? 'yes' : 'no';
  return [number, answer];
};
export default () => {
  gamePattern(description, game);
};
