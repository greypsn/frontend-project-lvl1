import readlineSync from 'readline-sync';

const greet = async () => {
  const name = await readlineSync.question('May I have your name? ');
  console.info(`Hello, ${name}!`);
  return name;
};

export default greet;