let mahmoadimg = document.getElementById("MahmoadIMG")
let talk = document.getElementById("talk")

mahmoadimg.addEventListener("mouseover", function () {
    talk.style.display = "block"
})
mahmoadimg.addEventListener("mouseout", function () {
    talk.style.display = "none"
})

talk.addEventListener("mouseover", function () {
    talk.style.display = "block"
})

talk.addEventListener("mouseout", function () {
    talk.style.display = "none"
})

document.addEventListener('DOMContentLoaded', (event) => {
    const slider = document.querySelector('.slider');
    const links = document.querySelectorAll('.slider-nav a');
    const slides = document.querySelectorAll('.slider img');

    links.forEach((link, index) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            slider.scrollTo({
                left: slides[index].offsetLeft,
                behavior: 'smooth'
            });
        });
    });
});
