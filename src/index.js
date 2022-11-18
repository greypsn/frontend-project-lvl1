import readlineSync from 'readline-sync';

// Количество попыток
const numberOfTrials = 3;

const runEngine = (rules, generateRound) => {
  console.info('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.info(`Hello, ${name}!`);
  console.info(rules);
  for (let i = 0; i < numberOfTrials; i += 1) {
    const { question, correctAnswer } = generateRound();
    console.info(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.info('Correct!');
    } else {
      console.info(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.info(`Let's try again, ${name}!`);
      return;
    }
  }
  console.info(`Congratulations, ${name}!`);
};

export default runEngine;
