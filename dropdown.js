//Add event listener
const firstDropdown = document.querySelector(".dropdown-1");
const firstDropdownElements = document.querySelectorAll(".dropdown-1");

firstDropdown.addEventListener("click", () => {
    
    for (let i = 0; i < firstDropdownElements.length; i++) {
        firstDropdownElements[i].classList.toggle("visible");
    }
})