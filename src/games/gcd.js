import { getRandomNum, gcd} from "../util.js";
import run from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const getQuestionAndAnswer = () => {
  const num1 = getRandomNum(0, 10);
  const num2 = getRandomNum(0, 10);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(gcd(num1, num2));
  return { question, correctAnswer };
};
export default () => run(rules, getQuestionAndAnswer);