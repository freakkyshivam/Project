
let navLink = document.querySelectorAll(".nav-link a");
let button = document.querySelectorAll("button");
let socialLink = document.querySelectorAll(".social-link")
 

navLink.forEach(link =>{
    link.addEventListener("mouseover", ()=>{
        mouseCursor.classList.add("link-grow");
    })

    link.addEventListener("mouseleave", ()=>{
        mouseCursor.classList.remove("link-grow");
    })
})

button.forEach(link =>{
    link.addEventListener("mouseover", ()=>{
        mouseCursor.classList.remove("cursor");
    })

    link.addEventListener("mouseleave", ()=>{
        mouseCursor.classList.add("cursor");
    })

})

socialLink.forEach(link =>{
    link.addEventListener("mouseover", ()=>{
        mouseCursor.classList.remove("cursor");
    })

    link.addEventListener("mouseleave", ()=>{
        mouseCursor.classList.add("cursor");
    })

})


function scrollAppear(){
    var introText = document.querySelector(".skills");
    var introPosition = introText.getBoundingClientRect().top;
    var  screenPosition = window.innerHeight/1.4;


    if(introPosition < screenPosition){
        introText.classList.add('intro-appear')
    }
    else{
        introText.classList.remove('intro-appear')
    }
}


window.addEventListener('scroll', scrollAppear)