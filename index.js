// DIGITAL CLOCK PROGRAM

const clock = document.getElementById("clock");


function updateClock(){
    const now = new Date();
    // const hours = 
    let hour = now.getHours().toString().padStart(2, 0);
    let minutes = now.getMinutes().toString().padStart(2, 0);
    let seconds = now.getSeconds().toString().padStart(2, 0);


    // update dom
    clock.textContent = `${hour}:${minutes}:${seconds}`
}


updateClock()
setInterval(updateClock, 1000);