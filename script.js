```javascript
/* =========================================
   MOBILE MENU
========================================= */

const menuButton = document.getElementById("menuButton");
const nav = document.querySelector(".nav");

menuButton.addEventListener("click", () => {

    nav.classList.toggle("active");

});


/* Close mobile menu after clicking a link */

document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});


/* =========================================
   SCROLL ANIMATION
========================================= */

const animatedElements =
    document.querySelectorAll(
        ".service-card, .work-card, .skill, .process-card"
    );


const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);


animatedElements.forEach(element => {

    observer.observe(element);

});


/* =========================================
   CURRENT YEAR
========================================= */

const year = new Date().getFullYear();

const footerText =
    document.querySelector(".footer p");

if (footerText) {

    footerText.textContent =
        `© ${year} Attkur Islam. All Rights Reserved.`;

}
```
