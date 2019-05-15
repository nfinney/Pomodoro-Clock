const sessionTimer = new Timer(document.querySelector('#session-timer').parentNode);
const breakTimer = new Timer(document.querySelector('#break-timer').parentNode);
const clock = new Clock(document.querySelector('#clock').parentNode);


// get the session number, set session to true
// when play is pressed, start countdown based on session
// when pause is pressed, pause session countdown
// display session time in timer display


// when play is clicked
// change to pause button
// play the timer
// if it's not set yet, set it to session
//      then play
// once it reaches 0
// check if it was session or break that reached zero
// play the break if it was session


function playPause(e) {
    if (e.target.className === 'play'){
        e.target.className = 'pause';
    } else {
        e.target.className = 'play';
    }
}

document.querySelector('#play-pause').addEventListener("click", playPause);
document.querySelector('#stop').addEventListener("click", function(){console.log('stop');});




// console.log(clock.countDownDate);