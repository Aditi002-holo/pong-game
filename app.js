import Ball from './ball.js';
import Paddle from './paddle.js';

const ball = new Ball(document.getElementById("ball"));
const playerPaddle = new Paddle(document.getElementById("player-paddle"));
const computerPaddle = new Paddle(document.getElementById("computer-paddle"));
const playerScoreElem = document.getElementById("player-score");
const computerScoreElem = document.getElementById("computer-score")

let lastTime;
function update(time) {
    // proceed with update code only if lastime is not empty
    if(lastTime !== undefined) {
        const delta = time - lastTime;
        //update code here 
        ball.update(delta,[playerPaddle.rect(), computerPaddle.rect()])
        computerPaddle.update(delta,ball.y)

        const hue = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--hue"));

        document.documentElement.style.setProperty("--hue", hue + delta * 0.01);

        if(isLose()) {
            handleLose()
        }
    }
    lastTime = time;
    // do not use - setInterval()
    window.requestAnimationFrame(update);
}

//handling the situation after losing 
function handleLose() {
    const rect = ball.rect();
    if(rect.right >= window.innerWidth) {
        playerScoreElem.textContent = parseInt(playerScoreElem.textContent) + 1;
    } else {
        computerScoreElem.textContent = parseInt(computerScoreElem.textContent) + 1;
    }
    ball.reset();
    computerPaddle.reset();

}

// to determine the loser
function isLose() {
    const rect = ball.rect();
    return rect.right >=window.innerWidth || rect.left <= 0;
}

// player side mouse over functionality
document.addEventListener("mousemove", e => {
    playerPaddle.position = (e.y / window.innerHeight) * 100;
})

window.requestAnimationFrame(update);
