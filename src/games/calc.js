// eslint-disable-next-line import/extensions
import gamePattern from '../index.js';

const description = 'What is the result of the expression?';
// eslint-disable-next-line consistent-return
const calculate = (number1, number2, operand) => {
  if (operand === '+') { return number1 + number2; } if (operand === '-') { return number1 - number2; } if (operand === '*') { return number1 * number2; }
};
const game = () => {
  const operands = ['+', '-', '*'];
  const operand = operands[Math.floor(Math.random() * 3)];
  const number1 = Math.floor(Math.random() * 50);
  const number2 = Math.floor(Math.random() * 10);
  const answer = calculate(number1, number2, operand);
  const question = `${number1} ${operand} ${number2}`;
  return [question, String(answer)];
};
const calcGame = () => {
  gamePattern(description, game);
};
export default calcGame;
