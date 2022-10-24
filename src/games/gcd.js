import getRandomInRange from '../util.js';
import runEngine from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};

const generateRound = () => {
  const num1 = getRandomInRange(0, 10);
  const num2 = getRandomInRange(0, 10);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(gcd(num1, num2));
  return { question, correctAnswer };
};
export default () => runEngine(rules, generateRound);
