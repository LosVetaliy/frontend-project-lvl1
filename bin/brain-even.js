import readlineSync from 'readline-sync';

console.log("Welcome to the Brain Games!");
var userName = readlineSync.question("May I have your name? ");     
console.log(`Hello, ${userName}!`);

console.log ('Answer "yes" if the number is even, otherwise answer "no".')
    

for (let i = 0; i < 3; i += 1) {
    let randomNumber = Math.floor(Math.random() * 101)
    var answer = readlineSync.question('Question: ' + randomNumber + ' ');
    if ((randomNumber % 2 === 0 && answer === 'yes') || (randomNumber % 2 !== 0 && answer === 'no')) {
        console.log ('Correct!')
        let n = 0
        n += 1
        if (n = 3) {console.log ('Congratulations, ' + userName + '!')} 
    } else {
        if (answer === 'yes') {
            console.log ("'"+ answer +"' is wrong answer ;(. Correct answer was 'no'.\nLet's try again," + userName + "!")
        break
        }
        else {
            console.log ("'"+ answer +"' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again," + userName + "!") 
        break
        }
    }
}
