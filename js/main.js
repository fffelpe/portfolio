// Bloqueia o menu de contexto (clique com o botão direito) em todo o portfólio.
document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
});

// Impede que imagens sejam arrastadas para outra aba ou para o computador.
document.addEventListener("dragstart", (event) => {
  if (event.target instanceof HTMLImageElement) {
    event.preventDefault();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // Atualiza automaticamente o ano do rodapé.
  const yearElement = document.querySelector("#ano-atual");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Desativa o arraste nativo de todas as imagens.
  document.querySelectorAll("img").forEach((image) => {
    image.setAttribute("draggable", "false");
  });

  // Fecha o menu mobile do Bootstrap depois que um item é selecionado.
  const menuElement = document.querySelector("#menuPrincipal");
  const menuLinks = document.querySelectorAll(
    "#menuPrincipal .nav-link, #menuPrincipal .btn"
  );

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (
        menuElement &&
        menuElement.classList.contains("show") &&
        window.bootstrap
      ) {
        const collapse = bootstrap.Collapse.getOrCreateInstance(
          menuElement
        );

        collapse.hide();
      }
    });
  });
});
