import resdlineSync from 'readline-sync'; 

export function hello(){
    console.log('Welcome to the Brain Games');
    const name = resdlineSync.question('Your answer: ');
    console.log('Hello, ' + name + '!');
}
