import startTimer from "./startTimer.js";

export let Interval;

//O setInterval inicia o Timer com de Tempo
export default function startButton() {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
}