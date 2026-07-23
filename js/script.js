// js/script.js
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = 1;
});

// Ao clicar em um link, ele faz um fade-out rápido antes de sair
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const url = this.getAttribute('href');
        document.body.style.opacity = 0;
        setTimeout(() => {
            window.location.href = url;
        }, 300); // tempo da animação (0.3s)
    });
});