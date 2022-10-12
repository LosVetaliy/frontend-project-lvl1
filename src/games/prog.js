import gamePattern from '../index.js';
import getRandomNumber from '../mathRandom.js';

const description = 'What number is missing in the progression?';
const getProgression = (startNumber, repeatNumber, stepNumber) => {
  const progression = [];
  for (let i = 0; i < repeatNumber; i += 1) {
    progression.push(startNumber + i * stepNumber);
  }
  return progression;
};
const game = () => {
  const startNumber = getRandomNumber(1, 10);
  const repeatNumber = getRandomNumber(5, 10);
  const stepNumber = getRandomNumber(5, 10);

  const question = getProgression(startNumber, repeatNumber, stepNumber);
  const hiddenNumber = getRandomNumber(1, question.length - 1);
  const answer = question[hiddenNumber];
  question[hiddenNumber] = '..';
  return [question.join(' '), String(answer)];
};
export default () => {
  gamePattern(description, game);
};
