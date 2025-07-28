
const imageSlide = document.querySelector('.image-slide');
const allImage = document.querySelectorAll('.image-slide img')

// buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// counter
let counter = 1; // set counter to 1
const size = allImage[0].clientWidth; // get width of image

imageSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';  // move image

 
nextBtn.addEventListener('click', () => {  // next button
    if (counter >= allImage.length - 1) return; // if counter is greater than or equal to last image return
    imageSlide.style.transition = 'transform 0.4s ease-in-out'; // smooth transition
    counter++; // increment counter
    imageSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';  // move image
});

prevBtn.addEventListener('click', () => { // previous button
    if (counter <= 0) return;  // if counter is less than 0 return
    imageSlide.style.transition = 'transform 0.4s ease-in-out'; // smooth transition
    counter--;  // decrement counter
    imageSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';  // move image
}); 

imageSlide.addEventListener('transitionend', () => {  // transition end
    if (allImage[counter].id === 'lastClone') {  // if last clone
        imageSlide.style.transition = 'none'; //   no transition
        counter = allImage.length - 2;  // set counter to second last image
        imageSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';  // move image
    }
    if (allImage[counter].id === 'firstClone') { // if first clone
        imageSlide.style.transition = 'none';  // no transition
        counter = allImage.length - counter;  // set counter to second last image
        imageSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';  // move image
    }
});
