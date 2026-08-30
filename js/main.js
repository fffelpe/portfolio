document.addEventListener("DOMContentLoaded", () => {
  const yearElement = document.querySelector("#ano-atual");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

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