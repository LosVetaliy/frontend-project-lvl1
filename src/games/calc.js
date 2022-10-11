import gamePattern from '../index.js';

const description = 'What is the result of the expression?';
const calculate = (number1, number2, operand) => {
  if (operand === '+') { return number1 + number2; } if (operand === '-') {
    return number1 - number2;
  }
  if (operand === '*') {
    return number1 * number2;
  }
};
const game = () => {
  const operands = ['+', '-', '*'];
  const operandsNumber = 3;
  const numberMax = 20;
  const operand = operands[Math.floor(Math.random() * operandsNumber)];
  const number1 = Math.floor(Math.random() * numberMax);
  const number2 = Math.floor(Math.random() * numberMax);
  const answer = calculate(number1, number2, operand);
  const question = `${number1} ${operand} ${number2}`;
  return [question, String(answer)];
};
export default () => {
  gamePattern(description, game);
};
