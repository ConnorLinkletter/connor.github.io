/*  *** Hints ***
---Consider the steps required...
---Start by getting inputed value (guess) 
---Generate random number (try output to console to see value)
---Compare these 2 values
---Add event listener for click-event on button
---Update message and scores etc
*/

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

let randNum = getRandomIntInclusive(1, 20) //Rand #
console.log(randNum);
let messageObj = document.querySelector(".message");
let score = 200;
let scoreboard = document.querySelector(".score");

function check(){
    let guess = Number(document.querySelector(".guess").value);
    if (guess === randNum){
        alert('win');
        messageObj.textContent = "You win!";
    } else if (guess < randNum){
        alert('too low')  ;  
        score -= 20;
    } else if (guess > randNum) {
        alert('too high');
        score -= 20;
    }
    scoreboard.textContent = score
    
}

//document.querySelector()
