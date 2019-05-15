var global_CanChangeTime = true;

const sessionTimer = new Timer(document.querySelector('#session-timer').parentNode);
const breakTimer = new Timer(document.querySelector('#break-timer').parentNode);
const clock = new Clock(document.querySelector('#clock').parentNode);