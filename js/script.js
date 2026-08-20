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

// js/lightbox.js
// Controla o slide (lightbox) das imagens do catálogo em trabalhos.html
document.addEventListener("DOMContentLoaded", () => {

    const galeria = document.getElementById("galeria-catalogo");
    if (!galeria) return; // Página sem galeria: não faz nada

    const miniaturas = Array.from(galeria.querySelectorAll(".imagem-catalogo img"));
    if (miniaturas.length === 0) return;

    const overlay = document.getElementById("lightbox-overlay");
    const imagemGrande = document.getElementById("lightbox-imagem");
    const contador = document.getElementById("lightbox-contador");
    const btnFechar = document.getElementById("lightbox-fechar");
    const btnAnterior = document.getElementById("lightbox-anterior");
    const btnProxima = document.getElementById("lightbox-proxima");

    let indiceAtual = 0;

    function abrirLightbox(indice) {
        indiceAtual = indice;
        atualizarImagem();
        overlay.classList.add("ativo");
        overlay.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden"; // trava o scroll do fundo
    }

    function fecharLightbox() {
        overlay.classList.remove("ativo");
        overlay.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
    }

    function atualizarImagem() {
        const img = miniaturas[indiceAtual];
        imagemGrande.src = img.src;
        imagemGrande.alt = img.alt;
        contador.textContent = `${indiceAtual + 1} / ${miniaturas.length}`;
    }

    function proximaImagem() {
        indiceAtual = (indiceAtual + 1) % miniaturas.length;
        atualizarImagem();
    }

    function imagemAnterior() {
        indiceAtual = (indiceAtual - 1 + miniaturas.length) % miniaturas.length;
        atualizarImagem();
    }

    // Clique nas miniaturas
    miniaturas.forEach((img, indice) => {
        img.addEventListener("click", () => abrirLightbox(indice));
    });

    // Botões do modal
    btnFechar.addEventListener("click", fecharLightbox);
    btnProxima.addEventListener("click", proximaImagem);
    btnAnterior.addEventListener("click", imagemAnterior);

    // Fecha ao clicar fora da imagem (no fundo escuro)
    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) fecharLightbox();
    });

    // Navegação e fechamento pelo teclado
    document.addEventListener("keydown", (e) => {
        if (!overlay.classList.contains("ativo")) return;

        if (e.key === "Escape") fecharLightbox();
        if (e.key === "ArrowRight") proximaImagem();
        if (e.key === "ArrowLeft") imagemAnterior();
    });

    // Navegação por swipe no celular
    let toqueInicialX = 0;

    overlay.addEventListener("touchstart", (e) => {
        toqueInicialX = e.changedTouches[0].clientX;
    });

    overlay.addEventListener("touchend", (e) => {
        const toqueFinalX = e.changedTouches[0].clientX;
        const diferenca = toqueFinalX - toqueInicialX;

        if (Math.abs(diferenca) > 40) {
            diferenca > 0 ? imagemAnterior() : proximaImagem();
        }
    });

});