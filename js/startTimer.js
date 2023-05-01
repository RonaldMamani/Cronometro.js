//variaveis
let seconds = parseFloat(0);
let tens = parseFloat(0);
let minutes = parseFloat(0);

export let appendTens = document.getElementById("tens")
export let appendSeconds = document.getElementById("seconds")
export let appendMinutes = document.getElementById("minutes")

export default function startTimer() {
    tens++;

    if (tens <= 9) {
        appendTens.innerText = "0" + tens;
    }
    if (tens > 9) {
        appendTens.innerText = tens;
    }

    if (tens > 99) {
        seconds++;
        appendSeconds.innerText = "0" + seconds;
        tens = 0;
        appendTens.innerText = "0" + 0;
    }
    if (seconds > 9) {
        appendSeconds.innerText = seconds;
    }

    if (seconds > 59) {
        minutes++;
        appendMinutes.innerText = "0" + minutes;
        seconds = 0;
        appendSeconds.innerText = "0" + 0;
    }
    if (minutes > 9) {
        appendMinutes.innerText = minutes;
    }
}