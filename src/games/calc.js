import getRandomInRange from '../util.js';
import runEngine from '../index.js';

const rules = 'What is the result of the expression?';

const getOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[getRandomInRange(0, operators.length - 1)];
};

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Operator ${operator} not supported`);
  }
};

const generateRound = () => {
  const num1 = getRandomInRange(0, 10);
  const num2 = getRandomInRange(0, 10);
  const operator = getOperator();
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = String(calculate(num1, num2, operator));
  return { question, correctAnswer };
};
export default () => runEngine(rules, generateRound);
