document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        // Prevent default action . jump to section.
        e.preventDefault();
        // Select all elements (a tags) that require smooth scroll
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            // define scroll behavior
            behavior: "smooth"
        });
    });
});