#!/usr/bin/env node

import resdlineSync from 'readline-sync';

console.log('Welcome to the Brain Games');
const name = resdlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

console.log(`What is the result of the expression?`);
for (let i = 0; i < 3; i++){
    const numberOne = getRandomInt(30);
    const numberTwo = getRandomInt(30);
    const signArray = ['+','-','*'];
    let sign = signArray[getRandomInt(3)];
    let answerCorrect = '';
    console.log(`Question: ${numberOne} ${sign} ${numberTwo}`);
    const answer = resdlineSync.question('Your answer: ');
        switch (sign){
            case '+':
                answerCorrect = numberOne + numberTwo;
                break;
            case '-':
                answerCorrect = numberOne - numberTwo;
                break;
            case '*':
                answerCorrect = numberOne * numberTwo;
                break;
        }
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


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }