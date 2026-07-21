/* ===================================================
   FELIPE LEAL - PORTFÓLIO
   script.js
=================================================== */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Destacar o link ativo no menu dinamicamente
    highlightActiveLink();

    // 2. Aplicar transição suave ao clicar nos links
    setupPageTransitions();

    // 3. Revelar elementos ao rolar a página
    setupScrollAnimations();
});

/**
 * Identifica a página atual e adiciona a classe 'ativo' no link correspondente
 */
function highlightActiveLink() {
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    const menuLinks = document.querySelectorAll(".menu a");

    menuLinks.forEach((link) => {
        const linkPath = link.getAttribute("href");

        if (linkPath === currentPath) {
            link.classList.add("ativo");
        } else {
            link.classList.remove("ativo");
        }
    });
}

/**
 * Transição suave de saída antes de mudar de página
 */
function setupPageTransitions() {
    const menuLinks = document.querySelectorAll(".menu a");

    menuLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            const targetUrl = link.getAttribute("href");

            // Ignora se for link externo ou âncora interna (#)
            if (!targetUrl || targetUrl.startsWith("#") || targetUrl.startsWith("http")) {
                return;
            }

            event.preventDefault();

            // Animação de saída do body
            document.body.style.transition = "opacity 0.35s ease";
            document.body.style.opacity = "0";

            setTimeout(() => {
                window.location.href = targetUrl;
            }, 350);
        });
    });
}

/**
 * Animação de revelação de elementos à medida que aparecem na tela (Scroll Observer)
 */
function setupScrollAnimations() {
    const itemsToAnimate = document.querySelectorAll(".projeto, .descricao, .titulo-pagina");

    if (!itemsToAnimate.length) return;

    const observerOptions = {
        root: null,
        threshold: 0.15, // Ativa quando 15% do elemento estiver visível
    };

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                obs.unobserve(entry.target); // Para de observar após animar
            }
        });
    }, observerOptions);

    itemsToAnimate.forEach((item) => {
        // Define o estado inicial para animação suave
        item.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
        observer.observe(item);
    });
}