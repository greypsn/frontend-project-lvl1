import resdlineSync from 'readline-sync';

console.log('Welcome to the Brain Games');
const name = resdlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

function getRandomInt(max) {
  return Math.floor(Math.random() * (max - 1)) + 1;
}

function nod (x, y) {
	if (y > x) return nod(y, x);
	if (!y) return x;
	return nod(y, x % y);
}

export {name, getRandomInt, nod}
