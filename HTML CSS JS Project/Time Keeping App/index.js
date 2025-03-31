
const btn = document.getElementById("btn")
const home = document.getElementById("home");
let time = document.getElementById("time")
 


function CurrentTime() {
    let time = new Date();
    let h = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let realTime = [h, min, sec];
     
    return realTime;
}

    

function fun(){
    let time = new Date();
    let h = time.getHours();
    let h2 = document.createElement("h2")
    if(h >= 5 && h<= 12 ){
        h2.textContent = "Good morning 🌅"
        document.body.style.backgroundImage = "url(./assets/morning.jpg)"
        h2.style.color = "Black"
    } else if(h > 12 && h <= 17){
        h2.textContent = "Good after-noon 🕑"
         document.body.style.backgroundImage = "url(./assets/afternoon.jpg)"
    }else if(h > 17 && h <20){
        h2.textContent = "Good Evening 🌆"
         document.body.style.backgroundImage = "url(./assets/evening.jpg)"
    }else{
        h2.textContent = "Good night 💤 "
         document.body.style.backgroundImage = "url(./assets/night.jpg)"
    }
    h2.id = "greet"
    home.appendChild(h2)
}

   setInterval(() => {
        let a = CurrentTime().join(":")
    
    time.innerHTML = a
    }, 1000);


btn.addEventListener("click", ()=>{
     fun()

     setTimeout(() => {
        document.getElementById("greet").remove()
        document.body.style.backgroundImage = ""
    }, 6000);
     
})
    

 