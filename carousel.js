//Global for slide state
let activeSlide = 1;

//Image slide mechanism
function imageSlider(activeSlide, wasActive) {

    //Select images
    const imageSelection = document.querySelectorAll(".viewport img");
    
    for (let i = 1; i <= imageSelection.length; i++) {
        
        if (activeSlide == wasActive) {
            console.log("Same image");

        } else if (i == activeSlide) {
            imageSelection[i - 1].classList.toggle("visible");

        } else if (i == wasActive) {
            imageSelection[wasActive - 1].classList.toggle("visible");
        }
    }
    console.log(`Active now: ${activeSlide}, Active before ${wasActive}`)};

//Carousel state handle function
function slideCarousel(direction, event) {

    //Keep index before
    const wasActive = activeSlide;
    
    //Select all images
    const imageSelection = document.querySelectorAll(".viewport img");

    //Handle state
    if (direction == "right" && activeSlide < imageSelection.length) {
        activeSlide++;
    } else if (direction == "right") {
        activeSlide = 1;
    } else if (direction == "left" && activeSlide > 1) {
        activeSlide--;
    } else if (direction == "left") {
        activeSlide = imageSelection.length;
    } else {
        activeSlide = event.target.getAttribute("name");
    }
    
imageSlider(activeSlide, wasActive);

}

//Add event listener
function carouselEventListeners() {
    const arrowLeft = document.querySelectorAll(".arrow-left");
    const arrowRight = document.querySelectorAll(".arrow-right");
    const dotButtons = document.querySelectorAll(".image-dot");

    //Attach functions
    arrowLeft.forEach(element => {
        element.addEventListener("click", (event) => slideCarousel("left", event));
    });
    
    arrowRight.forEach(element => {
        element.addEventListener("click", (event) => slideCarousel("right", event));
    });

    dotButtons.forEach(element => {
        element.addEventListener("click", (event) => slideCarousel(event.value, event));
    });
}

carouselEventListeners();