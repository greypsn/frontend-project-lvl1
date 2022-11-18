import getRandomInRange from '../util.js';
import runEngine from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (int) => {
  if (int % 2 === 0) {
    return true;
  }
  return false;
};

const generateRound = () => {
  const num = getRandomInRange(1, 20);
  const question = String(num);
  const correctAnswer = isEven(num) ? 'yes' : 'no';
  return { question, correctAnswer };
};
export default () => runEngine(rules, generateRound);
