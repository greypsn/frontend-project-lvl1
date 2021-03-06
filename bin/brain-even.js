#!/usr/bin/env node
import resdlineSync from 'readline-sync';
import {name, getRandomInt} from '../src/cli.js';

console.log(`Answer "yes" if the number is even, otherwise answer "no".`);
for (let i = 0; i < 3; i++){
    const number = getRandomInt(30);
    console.log(`Question: ${number}`);
    const answer = resdlineSync.question('Your answer: ');
        if (number%2 === 0 && answer === 'yes' ||
            number%2 === 1 && answer === 'no') {
            if (i === 2) {
                console.log('Correct!');
                console.log(`Congratulations, ${name}!`);
            }else{
                console.log('Correct!');
            }
        }else{
            console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.`);
            console.log(`Let's try again, ${name}`);
            break;
        }
}