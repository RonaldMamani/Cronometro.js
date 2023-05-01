import { Interval } from "./startButton.js";
import { appendTens, appendSeconds, appendMinutes } from "./startTimer.js";

let tens = "00";
let seconds = "00";
let minutes = "00";

//clearInterval é um metodo do JS que paralisa o Timer do setInterval
export function resetTimer() {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    minutes = "00";
    appendTens.innerText = tens;
    appendSeconds.innerText = seconds;
    appendMinutes.innerText = minutes
}