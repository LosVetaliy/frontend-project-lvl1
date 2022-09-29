import gamePattern from '../index.js'

const description = 'What is the result of the expression?'
const calculate = (number1, number2, operand) => {
    if (operand === '+') {return number1 + number2}
    else if (operand === '-') {return number1 - number2}
    else if (operand === '*') {return number1 * number2}
}
const game = () => {
    const operands = ['+', '-', '*']
    let operand = operands[Math.floor(Math.random() * 3)]
    const number1 = Math.floor(Math.random() * 50)
    const number2 = Math.floor(Math.random() * 10)
    const answer = calculate(number1, number2, operand)
    const question = `${number1} ${operand} ${number2}`
    return [question, String(answer)]
}
const calcGame = () => {
    gamePattern(description, game)
}
export default calcGame