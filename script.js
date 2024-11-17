/* Toggle button for mobile view */
let slideIndex = 0;
let slides = document.querySelector('.slides');
let dotElements = document.querySelectorAll('.dot');
let totalSlides = document.querySelectorAll('.slides img').length;

function showSlides() {
    slideIndex++;
    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    }
    updateSlides();
}

function updateSlides() {
    slides.style.transform = 'translateX(' + (-slideIndex * 100) + '%)';
    dotElements.forEach(dot => dot.classList.remove('active'));
    dotElements[slideIndex].classList.add('active');
}

// Next/prev controls
document.querySelector('.next').addEventListener('click', function() {
    slideIndex = (slideIndex + 1) % totalSlides;
    updateSlides();
});

document.querySelector('.prev').addEventListener('click', function() {
    slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
    updateSlides();
});

// Dots controls
function currentSlide(n) {
    slideIndex = n - 1;
    updateSlides();
}

// Auto slide change
setInterval(showSlides, 3000);
/* Logo Slide */

var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);

/* time line */

$(document).ready(function() {
    // Check if elements are in viewport
    function checkScroll() {
        $(".timeline-item").each(function() {
            const itemTop = $(this).offset().top;
            const windowTop = $(window).scrollTop();
            const windowHeight = $(window).height();

            if (windowTop + windowHeight > itemTop + 100) {
                $(this).addClass("active");
            }
        });
    }

    // Initial check on page load
    checkScroll();

    // Check on scroll
    $(window).on("scroll", function() {
        checkScroll();
    });
});

/* image chnage when click on thumbnail */

function changeMainImage(thumbnail) {
    // Get the main image element
    const mainImage = document.getElementById("main-image");

    // Update the main image source with the clicked thumbnail's source
    mainImage.src = thumbnail.src;
}

function myproduct() {
    window.location.href = "all_product.html";
}
