// JD Creations Network
// Main Website JavaScript


document.addEventListener("DOMContentLoaded", () => {


    // Mobile Navigation Toggle

    const menuButton = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");


    if(menuButton){

        menuButton.addEventListener("click", () => {

            nav.classList.toggle("active");

        });

    }



    // Close mobile menu when clicking a link

    const navLinks = document.querySelectorAll(".nav a");


    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("active");

        });

    });





    // Scroll reveal animation

    const revealElements = document.querySelectorAll(
        ".card, .feature, .steps div, .glass-card"
    );


    const revealObserver = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if(entry.isIntersecting){

                    entry.target.classList.add("show");

                }

            });

        },
        {
            threshold: .15
        }
    );



    revealElements.forEach(element => {

        element.classList.add("hidden");

        revealObserver.observe(element);

    });





    // Current year footer update

    const year = document.querySelector(".footer p");


    if(year){

        year.innerHTML =
        `© ${new Date().getFullYear()} JD Creations Network. All rights reserved.`;

    }


});
