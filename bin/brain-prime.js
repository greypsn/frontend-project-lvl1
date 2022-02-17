#!/usr/bin/env node
import resdlineSync from 'readline-sync';
import {name, getRandomInt, isPrime} from '../src/cli.js';

console.log(`Answer "yes" if given number is prime. Otherwise answer "no".`);
for (let i = 0; i < 3; i++){
    const number = getRandomInt(30);
    console.log(`Question: ${number}`);
    const answer = resdlineSync.question('Your answer: ');
        if (isPrime(number) && answer === 'yes' || 
            !isPrime(number) && answer === 'no') {
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