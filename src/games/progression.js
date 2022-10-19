import { getRandomNum, generateProgression } from '../util.js';
import run from '../index.js';

const rules = 'What number is missing in the progression?';
const progresLength = 10;

const getQuestionAndAnswer = () => {
  const start = getRandomNum(0, 10);
  const step = getRandomNum(1, 7);
  const progres = generateProgression(start, step, progresLength);
  const hidden = getRandomNum(0, progresLength - 1);
  const correctAnswer = String(progres[hidden]);
  progres[hidden] = '..';
  const question = progres.join(' ');
  return { question, correctAnswer };
};
export default () => run(rules, getQuestionAndAnswer);
