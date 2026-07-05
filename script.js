// =====================================
// Typing Animation
// =====================================

const roles = [
  "Python Backend Developer",
  "Api's Developer",
  "Data Engineer",
  "ETL Developer",
  "Software Engineer",
  "Production Support"
];

const typing = document.getElementById("typing");

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {
        typing.textContent = currentRole.substring(0, charIndex++);
    } else {
        typing.textContent = currentRole.substring(0, charIndex--);
    }

    let speed = deleting ? 60 : 120;

    if (!deleting && charIndex === currentRole.length + 1) {
        deleting = true;
        speed = 1800;
    }

    if (deleting && charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 400;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// =====================================
// Mobile Menu
// =====================================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if (menuBtn.innerHTML.includes("bars")) {
        menuBtn.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }

});


// Close menu after clicking

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';

    });

});


// =====================================
// Back To Top Button
// =====================================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// =====================================
// Navbar Background on Scroll
// =====================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(0,0,0,0.85)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.35)";

    } else {

        header.style.background = "rgba(0,0,0,.55)";
        header.style.boxShadow = "none";

    }

});


// =====================================
// Active Navigation
// =====================================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// =====================================
// Scroll Reveal Animation
// =====================================

const revealElements = document.querySelectorAll(
    ".hero-text, .hero-image, .about-container, .skill-card, .timeline-item, .project-card, .contact-card"
);

function reveal() {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;

        const top = element.getBoundingClientRect().top;

        if (top < windowHeight - 100) {

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll", reveal);

reveal();


// =====================================
// Smooth Hover Effect
// =====================================

document.querySelectorAll(".project-card").forEach(card => {

    card.addEventListener("mousemove", () => {

        card.style.transform = "translateY(-10px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});


// =====================================
// Fade-in Animation
// =====================================

const style = document.createElement("style");

style.innerHTML = `

.hero-text,
.hero-image,
.about-container,
.skill-card,
.timeline-item,
.project-card,
.contact-card{

opacity:0;

transform:translateY(40px);

transition:all .8s ease;

}

.show{

opacity:1;

transform:translateY(0);

}

.active{

color:#00bfff !important;

font-weight:600;

}

`;

document.head.appendChild(style);


// =====================================
// Footer Year
// =====================================

const footerText = document.querySelector("footer p:last-child");

footerText.innerHTML = `© ${new Date().getFullYear()} Raju J S. All Rights Reserved.`;