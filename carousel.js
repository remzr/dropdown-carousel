//Carousel slider function
function slideCarousel(direction, event) {

    //Select all images
    const imageSelection = document.querySelectorAll(".viewport img");
    console.log(imageSelection);
}

firstDropdown.addEventListener("click", () => {
    
    for (let i = 0; i < firstDropdownElements.length; i++) {
        firstDropdownElements[i].classList.toggle("visible");
    }
})

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