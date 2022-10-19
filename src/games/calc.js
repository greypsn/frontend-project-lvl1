import { getRandomNum, calculate } from '../util.js';
import run from '../index.js';

const rules = 'What is the result of the expression?';

const getOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[getRandomNum(0, operators.length - 1)];
};

const getQuestionAndAnswer = () => {
  const num1 = getRandomNum(0, 10);
  const num2 = getRandomNum(0, 10);
  const operator = getOperator();
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = String(calculate(num1, num2, operator));
  return { question, correctAnswer };
};
export default () => run(rules, getQuestionAndAnswer);
