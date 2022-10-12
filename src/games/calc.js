import gamePattern from '../index.js';
import getRandomNumber from '../mathRandom.js';

const description = 'What is the result of the expression?';
const calculate = (number1, number2, operand) => {
  switch (operand) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Unknown operand: '${operand}'!`);
  }
};
const game = () => {
  const operands = ['+', '-', '*'];
  const operandsNumber = 3;
  const minNumber = 1;
  const numberMax = 20;
  const operand = operands[getRandomNumber(minNumber, operandsNumber)];
  const number1 = getRandomNumber(minNumber, numberMax);
  const number2 = getRandomNumber(minNumber, numberMax);
  const answer = calculate(number1, number2, operand);
  const question = `${number1} ${operand} ${number2}`;
  return [question, String(answer)];
};
export default () => {
  gamePattern(description, game);
};
