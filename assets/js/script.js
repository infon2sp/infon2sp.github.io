const slides = document.querySelectorAll(".slide");
let current = 0;

function showSlide(index) {
    slides.forEach(s => s.classList.remove("active"));
    slides[index].classList.add("active");
}

// AUTO SLIDE
setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
}, 4000);

// SWIPE SUPPORT
let startX = 0;

const slider = document.querySelector(".promo-slider");

slider.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
});

slider.addEventListener("touchend", e => {
    let endX = e.changedTouches[0].clientX;
    let diff = startX - endX;

    if (diff > 50) {
        current = (current + 1) % slides.length;
    } else if (diff < -50) {
        current = (current - 1 + slides.length) % slides.length;
    }

    showSlide(current);
});
