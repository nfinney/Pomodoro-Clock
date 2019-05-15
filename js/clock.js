class Clock {
    
    constructor(node){
        // declarations
        this.node = node;
        this.clockDisplay = document.querySelector('#clock');
        this.playPauseButton = document.querySelector('#play-pause');
        this.stopButton = document.querySelector('#stop');
        this.timer = null;
        this.isPaused = true;
        this.hasPlayed = false;
        this.isSession = true;
        this.numberOfSessions = 0;
        const sessionID = document.querySelector('#session');
        
        // event listeners
        this.playPauseButton.addEventListener("click", evt => this.changePlayPauseButton(evt));
        this.stopButton.addEventListener("click", evt => this.stopTimer(evt));
        sessionID.querySelector('.decrease-time').addEventListener('click', evt => this.adjustClock(evt));
        sessionID.querySelector('.increase-time').addEventListener('click', evt => this.adjustClock(evt));
    }

    // adjusts clock display when time increased or decreased
    adjustClock(e) {
        if(global_CanChangeTime){
            this.clockDisplay.innerHTML = sessionTimer.time + ":00";
        }        
    }

    // changes the play button to pause and pause button to play
    changePlayPauseButton(e) {
        this.hasPlayed = true;

        if (e.target.className === 'play'){
            e.target.className = 'pause';
            this.isPaused = false;
            this.startTimer(e);
        } else {
            e.target.className = 'play';
            this.isPaused = true;
            this.pauseTimer(e);
        }
    }

    startTimer(e) {

        global_CanChangeTime = false;
        
        if(this.timer == null) {
            this.timer = sessionTimer.time * 60; // multiply by 60 for production
        }
        let minutes, seconds;
        let clockDisplay = this.clockDisplay;

        if(!this.isPaused){
            
            this.intervalID = setInterval(() => {
                
                minutes = parseInt(this.timer / 60, 10);
                seconds = parseInt(this.timer % 60, 10);

                minutes = minutes < 10 ? minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;

                clockDisplay.innerHTML = minutes + ":" + seconds;
                
                if (--this.timer < 0) {
                    this.startNextTimer();
                }
            }, 1000);
        }        
    }

    pauseTimer(e) {
        clearInterval(this.intervalID);
    }

    stopTimer(e) {
        global_CanChangeTime = true;
        this.timer = null;
        this.isPaused = true;
        this.playPauseButton.className = 'play';
        this.adjustClock();
        clearInterval(this.intervalID);
    }

    startNextTimer() {
        if(this.isSession) {
            this.isSession = false;
            this.timer = breakTimer.time * 60; // multiply by 60 for production
            this.numberOfSessions++;            
        } else {
            this.isSession = true;
            this.timer = sessionTimer.time * 60; // multiply by 60 for production
        }
    }

}