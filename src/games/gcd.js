import gamePattern from '../index.js'

const description = 'Find the greatest common divisor of given numbers.'
const gcd = (number1, number2) => {
    while (number1 !== number2) {
        if (number1 > number2) {
            number1 = number1 - number2
        }
        else {
            number2 = number2 - number1
        }
    }
    return number1
}
const game = () => {
    let number1 = Math.floor(Math.random() * 11)
    let number2 = Math.floor(Math.random() * 11)
    const answer = gcd(number1, number2)
    const question = `${number1} ${number2}`
    return [question, String(answer)]
}
const gcdGame = () => {
    gamePattern(description, game)
}
export default gcdGame