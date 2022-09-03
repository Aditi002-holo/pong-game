import Ball from './ball.js'

const ball = new Ball(document.getElementById("ball"))

let lastTime
function update(time) {
    // console.log(lastTime)
    // proceed with update code only if lastime is not empty
    if(lastTime !== undefined) {
        const delta = time - lastTime
        //update code here 
        ball.update(delta) 
    }
    lastTime = time
    // do not use - setInterval()
    window.requestAnimationFrame(update)
}

window.requestAnimationFrame(update)
