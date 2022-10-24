import getRandomInRange from '../util.js';
import runEngine from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) { return false; }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) { return false; }
  }
  return true;
};

const generateRound = () => {
  const num = getRandomInRange(0, 10);
  const question = String(num);
  const correctAnswer = isPrime(num) ? 'yes' : 'no';
  return { question, correctAnswer };
};
export default () => runEngine(rules, generateRound);
