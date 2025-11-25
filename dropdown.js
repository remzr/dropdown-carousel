//Add event listener
const firstDropdown = document.querySelector("#dropdown-1");

firstDropdown.addEventListener("click", (event) => {
    const currentTarget = event.currentTarget.getAttribute("value");
    const target = event.target.getAttribute("id");
    console.log(currentTarget);
    console.log(target);
})


/*
    if (target.data-dropdown-state == "closed") {

    } else {

    }
}; */