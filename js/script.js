// ======================================
// INITIALIZATION
// ======================================

document.addEventListener("DOMContentLoaded", () => {
    initClock();
    initFormValidation();
    initBackToTop();
    initDarkMode();
    initTypingEffect();
    initSlideshow();
    initNavEffects();
});


// ======================================
// CLOCK
// ======================================

function initClock() {
    const clock = document.getElementById("clock");
    if (!clock) return;

    function updateClock() {
        const now = new Date();

        const time = now.toLocaleTimeString("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });

        clock.textContent = time;
    }

    updateClock();
    setInterval(updateClock, 1000);
}


// ======================================
// FORM VALIDATION
// ======================================

function initFormValidation() {
    const form = document.querySelector("form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = form.querySelector("#name");
        const email = form.querySelector("#email");
        const message = form.querySelector("#message");

        if (!name.value.trim()) return alert("Enter name");
        if (!validateEmail(email.value)) return alert("Invalid email");
        if (!message.value.trim()) return alert("Enter message");

        alert("Message submitted successfully!");
        form.reset();
    });
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


// ======================================
// BACK TO TOP
// ======================================

function initBackToTop() {
    const btn = document.getElementById("topBtn");
    if (!btn) return;

    window.addEventListener("scroll", () => {
        btn.classList.toggle("show", window.scrollY > 300);
    });

    btn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}


// ======================================
// DARK MODE
// ======================================

function initDarkMode() {
    const btn = document.getElementById("darkBtn");
    if (!btn) return;

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }

    btn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        localStorage.setItem(
            "theme",
            document.body.classList.contains("dark-mode") ? "dark" : "light"
        );
    });
}


// ======================================
// TYPING EFFECT
// ======================================

function initTypingEffect() {
    const el = document.getElementById("typing");
    if (!el) return;

    const text = "Interactive Media Technology Student";
    let i = 0;

    el.textContent = "";

    function type() {
        if (i < text.length) {
            el.textContent += text[i++];
            setTimeout(type, 100);
        }
    }

    type();
}


// ======================================
// SLIDESHOW
// ======================================

function initSlideshow() {
    const slides = document.querySelectorAll(".slide");
    if (!slides.length) return;

    let index = 0;

    function show() {
        slides.forEach(s => s.style.display = "none");

        slides[index].style.display = "block";

        index = (index + 1) % slides.length;

        setTimeout(show, 3000);
    }

    show();
}


// ======================================
// NAV EFFECTS
// ======================================

function initNavEffects() {
    const links = document.querySelectorAll("nav a");
    if (!links.length) return;

    links.forEach(link => {
        link.addEventListener("mouseenter", () => {
            link.classList.add("nav-hover");
        });

        link.addEventListener("mouseleave", () => {
            link.classList.remove("nav-hover");
        });
    });
}