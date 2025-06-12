//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector("#mainNav");
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove("navbar-shrink");
        } else {
            navbarCollapsible.classList.add("navbar-shrink");
        }
    };

    // Shrink the navbar
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener("scroll", navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector("#mainNav");
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: "#mainNav",
            rootMargin: "0px 0px -40%",
        });
    }

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector(".navbar-toggler");
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll("#navbarResponsive .nav-link")
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener("click", () => {
            if (window.getComputedStyle(navbarToggler).display !== "none") {
                navbarToggler.click();
            }
        });
    });
});

const words = [
    "Post-Doctoral Researcher",
    "Aspiring Software Developer",
    "Aspiring Tester",
];

const typewriterElement = document.getElementById("typewriter");

let wordIndex = 0;
let charIndex = 0;
let typingDelay = 100; // ms per character
let erasingDelay = 50;
let newWordDelay = 2000; // Delay between words
let isDeleting = false;

function type() {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
        // Add one character
        typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
            // Word complete, pause before deleting
            isDeleting = true;
            setTimeout(type, newWordDelay);
        } else {
            setTimeout(type, typingDelay);
        }
    } else {
        // Remove one character
        typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            // Word erased, move to next word
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, typingDelay);
        } else {
            setTimeout(type, erasingDelay);
        }
    }
}

// Start the typing effect after page loads
document.addEventListener("DOMContentLoaded", () => {
    if (words.length) setTimeout(type, 500);
});

// Loop through rpi images
const images = [
    "assets/img/portfolio/rpi1.jpeg",
    "assets/img/portfolio/rpi2.jpeg",
    "assets/img/portfolio/rpi3.jpeg",
    "assets/img/portfolio/rpi4.jpeg",
    "assets/img/portfolio/rpi5.jpeg",
    "assets/img/portfolio/rpi6.jpeg",
];

let currentIndex = 0;
const imgElement = document.getElementById("rotating-image");

setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    imgElement.src = images[currentIndex];
}, 1000);
