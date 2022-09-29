import readlineSync from 'readline-sync'

const gamePattern = (description, game) => {
  console.log('Welcome to the Brain Games!')
  const userName = readlineSync.question('May I have your name?: ')
  console.log(`Hello, ${userName}!`)
  console.log(description)

  for (let i = 0; i < 3; i += 1) {
    const [question, trueAnswer] = game()
    console.log(`Question: ${question}`)
    const answer = readlineSync.question('Your answer: ')
    if (answer !== trueAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.`)
      console.log(`Let's try again, ${userName}!`)
      return
    }
    console.log('Correct!')
  }
  console.log(`Congratulations, ${userName}!`)
}
export default gamePattern