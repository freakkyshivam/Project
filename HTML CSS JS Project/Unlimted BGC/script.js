

function randomColor(){
    const hex = '123456789ABCDEF'
    let color = '#';

    for(let i =0; i<6; i++){
        color += hex[Math.floor(Math.random() * 15)]
    }
    return color;
}

const start = document.querySelector("#start");
const stop = document.querySelector("#stop");

let h2 = document.createElement('h2')
document.body.appendChild(h2);

function changeBg(){
    const color = randomColor();
    h2.textContent = `Current Background Color: ${color}`;
    document.body.style.backgroundColor = color;
    
}

start.addEventListener('click', () =>{
    const interval = setInterval(changeBg, 1000)
    stop.addEventListener('click', () =>{
        clearInterval(interval)
        interval = null;
    })
})

