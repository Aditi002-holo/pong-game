import Ball from './ball.js'

const ball = new Ball(document.getElementById("ball"))

function update(time) {
    // proceed with update code only if lastime is not empty
    if(lastTime != null) {
        const delta = time - lastTime
        //update code here 

        ball.update(delta) 
    }
    
    lastTime = time
    // do not use - setInterval()
    window.requestAnimationFrame(update)
}


