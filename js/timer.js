class Timer {

    constructor(node){
        // declarations
        this.node = node;
        this.time = parseInt(node.querySelector('.timer').innerHTML);
        this.timerText = node.querySelector('.timer');
        this.increaseButton = node.querySelector('.increase-time');
        this.decreaseButton = node.querySelector('.decrease-time');

        // event listeners
        this.increaseButton.addEventListener("click", evt => this.increaseTime(evt));
        this.decreaseButton.addEventListener("click", evt => this.decreaseTime(evt));
        
    }

    increaseTime(e) {
        if(this.time >= 30) {
            this.time = 30;
        } else {
            this.time += 1;
        }
        this.displayTime();
    }
    decreaseTime(e) {
        if(this.time <= 0) {
            this.time = 0;
        } else {
            this.time -= 1;
        }
        this.displayTime();
    }

    displayTime() {
        this.timerText.innerHTML = this.time;
        document.querySelector('#clock').innerHTML = this.time + ':00';
    }
}