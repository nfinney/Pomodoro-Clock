class Timer {

    constructor(node){
        // declarations
        this.node = node;
        this.time = parseInt(node.querySelector('.timer').innerHTML);
        this.timerText = node.querySelector('.timer');
        this.increaseButton = node.querySelector('.increase-time');
        this.decreaseButton = node.querySelector('.decrease-time');

        // event listeners
        this.increaseButton.addEventListener("click", evt => this.canChangeTime(evt));
        this.decreaseButton.addEventListener("click", evt => this.canChangeTime(evt));
        
    }

    canChangeTime(e){
        if(global_CanChangeTime && e.target.className == 'increase-time'){
            this.increaseTime();
        } else if(global_CanChangeTime && e.target.className == 'decrease-time') {
            this.decreaseTime();
        }
    }

    increaseTime() {
        if(this.time >= 30) {
            this.time = 30;
        } else {
            this.time += 1;
        }
        this.displayTime();
    }
    decreaseTime() {
        if(this.time <= 1) {
            this.time = 1;
        } else {
            this.time -= 1;
        }
        this.displayTime();
    }

    displayTime() {
        this.timerText.innerHTML = this.time;
    }
}