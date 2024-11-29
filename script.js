document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav a");
    const pages = document.querySelectorAll(".page");

    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();

            if (link.classList.contains("active")) {
                return;
            }

            navLinks.forEach(nav => nav.classList.remove("active"));

            link.classList.add("active");

            pages.forEach(page => page.style.display = "none");

            const targetPage = document.getElementById(link.getAttribute("data-page"));
            if (targetPage) {
                targetPage.style.display = "block";
            }
        });
    });
});