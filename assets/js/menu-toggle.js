const menuToggle = document.getElementById("check");
const navlinks = document.querySelectorAll(".navbar .nav-item");

navlinks.forEach(link => {
    link.addEventListener('click', () =>{
        menuToggle.checked = false;
    });
});

