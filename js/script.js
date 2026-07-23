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

// Bloqueia o clique com o botão direito (menu de contexto)
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

// Bloqueia atalhos de cópia, recorte, colagem e inspeção de elemento
document.addEventListener('keydown', (e) => {
    // Desativa Ctrl+C, Ctrl+V, Ctrl+X, Ctrl+U (Ver código-fonte) e Ctrl+S (Salvar)
    if (e.ctrlKey && ['c', 'v', 'x', 'u', 's'].includes(e.key.toLowerCase())) {
        e.preventDefault();
    }

    // Desativa Cmd+C, Cmd+V, Cmd+X, Cmd+U, Cmd+S no Mac
    if (e.metaKey && ['c', 'v', 'x', 'u', 's'].includes(e.key.toLowerCase())) {
        e.preventDefault();
    }

    // Desativa F12 e Atalhos do DevTools (Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C)
    if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && ['i', 'j', 'c'].includes(e.key.toLowerCase())) ||
        (e.metaKey && e.altKey && ['i', 'j', 'c'].includes(e.key.toLowerCase()))
    ) {
        e.preventDefault();
    }
});

// Bloqueia eventos diretos de cópia, corte e cola
['copy', 'cut', 'paste'].forEach((eventType) => {
    document.addEventListener(eventType, (e) => {
        e.preventDefault();
    });
});