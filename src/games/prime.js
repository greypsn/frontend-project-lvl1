import { getRandomNum, isPrime } from "../util.js";
import run from '../index.js';

const rules = 'Answer "yes" if the number is prime, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const num = getRandomNum(0, 10);
  const question = String(num);
  const correctAnswer = isPrime(num) ? 'yes' : 'no';
  return { question, correctAnswer };
};
export default () => run(rules, getQuestionAndAnswer);