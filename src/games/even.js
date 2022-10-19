import { getRandomNum } from "../util.js";
import run from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const num = getRandomNum(1, 20);
  const question = String(num);
  const correctAnswer = (num % 2 === 0) ? 'yes' : 'no';
  return { question, correctAnswer };
};
export default () => run(rules, getQuestionAndAnswer);