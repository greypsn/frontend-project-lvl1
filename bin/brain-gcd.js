#!/usr/bin/env node
import resdlineSync from 'readline-sync';
import {name, getRandomInt, nod} from '../src/cli.js';

console.log(`Find the greatest common divisor of given numbers.`);
for (let i = 0; i < 3; i++){
    const numberOne = getRandomInt(30);
    const numberTwo = getRandomInt(30);
    // console.log(numberOne + '   ' + numberTwo);
    const answerCorrect = nod(numberOne, numberTwo);
    console.log(`Question: ${numberOne} ${numberTwo}`);
    const answer = resdlineSync.question('Your answer: ');

        if (answerCorrect === Number(answer)) {
            if (i === 2) {
                console.log('Correct!');
                console.log(`Congratulations, ${name}!`);
            }else{
                console.log('Correct!');
            }
        }else{
            console.log(`${answer} is wrong answer ;(. Correct answer was ${answerCorrect}.`);
            console.log(`Let's try again, ${name}`);
            break;
        }
}