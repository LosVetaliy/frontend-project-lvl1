import gamePattern from '../index.js';

const description = 'What number is missing in the progression?';
const getRandomArbitrary = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};
const getProgression = (startNumber, repeatNumber, stepNumber) => {
    const progression = [];
    for (let i = 0; i < repeatNumber; i += 1) {
        progression.push(startNumber + i * stepNumber)  ;
    };
    return progression;
}
const game = () => {
    const startNumber = getRandomArbitrary(1, 9);
    const repeatNumber = getRandomArbitrary(5, 10);
    const stepNumber = getRandomArbitrary(2, 5);

    let question = getProgression(startNumber, repeatNumber, stepNumber);
    const hiddenNumber = getRandomArbitrary(1, question.length - 1);
    const answer = question[hiddenNumber];
    question[hiddenNumber] = '..';
    return [question.join(' '), String(answer)];
};
function progGame() {
    gamePattern(description, game);
};
export default progGame;