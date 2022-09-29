import gamePattern from '../index.js'

const description = 'Answer "yes" if the number is even, otherwise answer "no".'
const isEven = number => number % 2 === 0
const game = () => {
  const number = Math.floor(Math.random() * 101)
  const answer = isEven(number) ? 'yes' : 'no' 
  return [number, answer]
}
const evenGame = () => {
    gamePattern(description, game)
}
export default evenGame