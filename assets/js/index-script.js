const menuToggle = document.getElementById("check");
const navlinks = document.querySelectorAll(".navbar a");

navlinks.forEach(link => {
    link.addEventListener('click', () =>{
        menuToggle.checked = false;
    });
});

