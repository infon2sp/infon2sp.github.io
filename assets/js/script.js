document.addEventListener("DOMContentLoaded", function () {

    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    const slider = document.querySelector(".promo-slider");

    let current = 0;

    function showSlide(index) {
        slides.forEach(s => s.classList.remove("active"));
        dots.forEach(d => d.classList.remove("active"));

        slides[index].classList.add("active");
        if (dots[index]) {
            dots[index].classList.add("active");
        }
    }

    // AUTO SLIDE
    setInterval(() => {
        current = (current + 1) % slides.length;
        showSlide(current);
    }, 4000);

    // SWIPE SUPPORT
    let startX = 0;

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

    // CLICK DOTS
    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            current = i;
            showSlide(current);
        });
    });

});
