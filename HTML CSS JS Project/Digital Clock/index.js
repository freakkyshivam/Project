
let clock = document.getElementById("clock")


setInterval(() => {
    let a = new Date();
    clock.innerHTML = `
    <h2>${a}</h2>

    `
}, 1000);
