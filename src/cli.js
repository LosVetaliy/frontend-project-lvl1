
import readlineSync from 'readline-sync';
const welcomeName = () => {
    console.log("Welcome to the Brain Games!");
    //var readlineSync = require('readline-sync');
    var userName = readlineSync.question("May I have your name? ");     
    console.log(`Hello, ${userName}!`);
}
export default welcomeName