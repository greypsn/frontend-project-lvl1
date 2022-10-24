import getRandomInRange from '../util.js';
import runEngine from '../index.js';

const rules = 'What number is missing in the progression?';
const progresLength = 10;

const generateProgression = (start, step, length) => {
  const res = [];
  for (let i = 0; i < length; i += 1) {
    res.push(start + step * i);
  }
  return res;
};

const generateRound = () => {
  const start = getRandomInRange(0, 10);
  const step = getRandomInRange(1, 7);
  const progres = generateProgression(start, step, progresLength);
  const hidden = getRandomInRange(0, progresLength - 1);
  const correctAnswer = String(progres[hidden]);
  progres[hidden] = '..';
  const question = progres.join(' ');
  return { question, correctAnswer };
};

export default () => runEngine(rules, generateRound);
