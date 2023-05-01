import startButton from "./startButton.js";
import { stopButton } from "./stopButton.js";
import { resetTimer } from "./resetTimer.js";
import switchTheme from "./theme.js";

document.querySelector("#button-start").addEventListener("click", startButton)
document.querySelector("#button-stop").addEventListener("click", stopButton)
document.querySelector("#button-reset").addEventListener("click", resetTimer)
document.querySelector("#theme").addEventListener("click", switchTheme)
