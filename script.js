'use strict'

console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = ' ';
//console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() *20) + 1;

let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    if(!guess){
        document.querySelector('.message').textContent = 'No Numbers!';
    }
    else if(guess === secretNumber){
        document.querySelector('.message').textContent = 'Correct Numbers!';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    }
    else if (guess > secretNumber){
        if(score > 0){
            document.querySelector('.message').textContent = 'Guess is too high';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{document.querySelector('.message').textContent = ' you have loose the game';
        }
    }
    else if (guess < secretNumber){
        if(score > 0){
            document.querySelector('.message').textContent = 'guess is too low';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = 'you have loose the game';  
        }
    }
})
document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() *20) + 1;
    document.querySelector('.message').textContent = 'Start Guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = ' ';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})