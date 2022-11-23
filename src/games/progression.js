import getRandomInRange from '../util.js';
import runEngine from '../index.js';

const rules = 'What number is missing in the progression?';
const progressionLength = 10;

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const generateRound = () => {
  const start = getRandomInRange(0, 10);
  const step = getRandomInRange(1, 7);
  const progression = generateProgression(start, step, progressionLength);
  const hiddenIndex = getRandomInRange(0, progressionLength - 1);
  const correctAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return { question, correctAnswer };
};

export default () => runEngine(rules, generateRound);
