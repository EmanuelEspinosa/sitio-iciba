const slider = document.querySelector(".slider .slider_content");
const items = document.querySelectorAll(".slider .slider_content .item");
const dots = document.querySelectorAll(".slider .dots li");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

//Declaro las variables que serviran de apoyo

let active = 0;
let lengthItems = items.length - 1;
let refreshSlider = setInterval(() => { next.click() }, 7000);

//Declaro funciones y escuchas de click

function reloadSlider() {
    let checkLeft = items[active].offsetLeft;
    slider.style.left = -checkLeft + "px";

    let lastActiveDot = document.querySelector(".slider .dots li.active");
    lastActiveDot.classList.remove("active");
    dots[active].classList.add("active");

    clearInterval(refreshSlider);
    refreshSlider = setInterval(() => { next.click() }, 7000);
}

next.addEventListener("click", () => {
    if (active + 1 > lengthItems) {
        active = 0;
    }
    else {
        active = active + 1;
    }
    reloadSlider();
});

prev.addEventListener("click", () => {
    if (active - 1 < 0) {
        active = lengthItems;
    }
    else {
        active = active - 1;
    }
    reloadSlider();
})

dots.forEach((li, key) => {
    li.addEventListener("click", () => {
        active = key;
        reloadSlider();
    });
});

