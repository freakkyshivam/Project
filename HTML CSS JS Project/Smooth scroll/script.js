

function smoothScroll(target,duration){

    var target = document.querySelector(target)
     var targetPosition = target.getBoundingClientRect().top;
    var startingPosition = window.pageYOffset;
    var distance = targetPosition - startingPosition;
    var startTime = null;

    function animationScroll(currentTime){
        if(startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startingPosition, distance, duration)
        window.scroll(0,run)
        if(timeElapsed < duration) requestAnimationFrame(animationScroll);
    }

    function ease(t,b,c,d){
        t /= d/2;
        if(t<1) return c/2*t*t + b;
        t--;
        return -c/2 *(t*(t-2)-1) + b;
    }

    requestAnimationFrame(animationScroll);
}

var section1 = document.querySelector(".section1")
section1.addEventListener('click', function (){
    smoothScroll(".section2", 1000)
})

var section2 = document.querySelector(".section2")
section2.addEventListener('click', function (){
    smoothScroll(".section1", 1000)
})




