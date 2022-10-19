import readlineSync from 'readline-sync';

const welcome = () => {
  console.info('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.info(`Hello, ${name}!`);
  return name;
};

export default welcome;
