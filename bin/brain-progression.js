#!/usr/bin/env node
import resdlineSync from 'readline-sync';
import {name, getRandomInt} from '../src/cli.js';

console.log(`What number is missing in the progression?`);
for (let i = 0; i < 3; i++){
    const startPoint = getRandomInt(10);
    const shiftPoint = getRandomInt(5);
    const d = getRandomInt(5);
    const t = getRandomInt(10);
    let correctAnswer = 0; 
    let progression = '';
    for (let i = 1; i <= 10; i++) {
        if (i === t){
            progression += `.. `;
            correctAnswer = startPoint + shiftPoint + d*i;
            console.log('ПРОВЕРКА: ' + correctAnswer);
        }else{
            progression += `${startPoint + shiftPoint + d*i} `;
        }
    }
    console.log(`Question: ${progression}`);
    const answer = resdlineSync.question('Your answer: ');
        if (Number(answer) === correctAnswer) {
            if (i === 2) {
                console.log('Correct!');
                console.log(`Congratulations, ${name}!`);
            }else{
                console.log('Correct!');
            }
        }else{
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}`);
            break;
        }
}

