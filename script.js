document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav a");
    const pages = document.querySelectorAll(".page");

    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); // Evita o comportamento padrão do link

            // Verifica se o link já está ativo
            if (link.classList.contains("active")) {
                return; // Se já está ativo, não faz nada
            }

            // Remove a classe "active" de todos os links
            navLinks.forEach(nav => nav.classList.remove("active"));

            // Adiciona a classe "active" ao link clicado
            link.classList.add("active");

            // Esconde todas as páginas
            pages.forEach(page => page.style.display = "none");

            // Exibe a página correspondente ao link clicado
            const targetPage = document.getElementById(link.getAttribute("data-page"));
            if (targetPage) {
                targetPage.style.display = "block";
            }
        });
    });
});