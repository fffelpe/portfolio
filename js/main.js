// ==========================================================
// PORTFÓLIO FELIPE LEAL
// js/main.js
// ==========================================================


// ==========================================================
// LISTA DE ARTES / COLAGENS
// ==========================================================

const portfolioArts = [
  {
    title: "Ao Topo da Publicidade",
    file: "Ao Topo da Publicidade.jpg"
  },
  {
    title: "Borboletas na Cidade Antiga",
    file: "Borboletas na Cidade Antiga.jpg"
  },
  {
    title: "Colheita Urbana",
    file: "Colheita Urbana.jpg"
  },
  {
    title: "Constelação de Contrastes",
    file: "Constelação de Contrastes.jpg"
  },
  {
    title: "Decisões às Cegas",
    file: "Decisões às Cegas.jpg"
  },
  {
    title: "Entre Cenas e Imóveis",
    file: "Entre Cenas e Imóveis.jpg"
  },
  {
    title: "Luxo à Sombra do Petroleiro",
    file: "Luxo à Sombra do Petroleiro.jpg"
  },
  {
    title: "Mochileiras do Passado",
    file: "Mochileiras do Passado.jpg"
  },
  {
    title: "O Olhar do Sapo",
    file: "O Olhar do Sapo.jpg"
  },
  {
    title: "O Palhaço-Guardião",
    file: "O Palhaço-Guardião.jpg"
  },
  {
    title: "O Rosto de Todos",
    file: "O Rosto de Todos.jpg"
  },
  {
    title: "Overdose Industrial",
    file: "Overdose Industrial.jpg"
  },
  {
    title: "Rei do Concreto",
    file: "Rei do Concreto.jpg"
  },
  {
    title: "Silêncio Escaneável",
    file: "Silêncio Escaneável.jpg"
  },
  {
    title: "Suor sob o Banquete",
    file: "Suor sob o Banquete.jpg"
  },
  {
    title: "Vovó em Alto Mar",
    file: "Vovó em Alto Mar.jpg"
  }
];


// ==========================================================
// CSS DA GALERIA DE ARTES
// ==========================================================

function addArtsStyles() {

  // Evita inserir o CSS mais de uma vez
  if (document.querySelector("#portfolio-arts-styles")) {
    return;
  }

  const styles = document.createElement("style");

  styles.id = "portfolio-arts-styles";

  styles.textContent = `

    /* =====================================================
       SEÇÃO DE ARTES
    ===================================================== */

    .arts-section {
      position: relative;
      overflow: hidden;

      background:
        radial-gradient(
          circle at 15% 10%,
          rgba(91, 140, 255, 0.09),
          transparent 26rem
        ),
        rgba(255, 255, 255, 0.018);

      border-top: 1px solid var(--portfolio-border);
      border-bottom: 1px solid var(--portfolio-border);
    }


    /* =====================================================
       GRADE
    ===================================================== */

    .arts-grid {
      align-items: stretch;
    }


    /* =====================================================
       CARD DE CADA ARTE
    ===================================================== */

    .art-card {
      height: 100%;
      overflow: hidden;

      background: linear-gradient(
        145deg,
        rgba(19, 34, 56, 0.95),
        rgba(13, 26, 43, 0.95)
      );

      border: 1px solid var(--portfolio-border);

      border-radius: 1.25rem;

      box-shadow:
        0 1rem 3rem rgba(0, 0, 0, 0.16);

      transition:
        transform 180ms ease,
        border-color 180ms ease,
        box-shadow 180ms ease;
    }


    /* Hover do card */

    .art-card:hover {
      border-color: rgba(91, 140, 255, 0.48);

      transform: translateY(-5px);

      box-shadow:
        0 1.4rem 3.5rem rgba(0, 0, 0, 0.24);
    }


    /* =====================================================
       TÍTULO DA ARTE
    ===================================================== */

    .art-card-title {
      min-height: 86px;

      display: flex;
      align-items: center;

      padding: 1.35rem 1.5rem;

      border-bottom:
        1px solid var(--portfolio-border);
    }


    .art-card-title h3 {
      margin: 0;

      color: #f8f9fa;

      line-height: 1.35;
    }


    /* =====================================================
       CONTAINER DA IMAGEM
    ===================================================== */

    .art-image-frame {
      display: flex;

      align-items: center;
      justify-content: center;

      min-height: 320px;

      padding: 0.75rem;

      background:
        rgba(2, 7, 14, 0.72);
    }


    /* =====================================================
       IMAGEM
    ===================================================== */

    .art-image {
      display: block;

      width: 100%;

      height: auto;

      max-height: 620px;

      object-fit: contain;

      border-radius: 0.75rem;

      /* Impede seleção */

      user-select: none;

      -webkit-user-select: none;

      /* Impede arrastar */

      -webkit-user-drag: none;

      /* Não permite interação direta */

      pointer-events: none;
    }


    /* =====================================================
       TABLET
    ===================================================== */

    @media (max-width: 991.98px) {

      .art-image-frame {
        min-height: 280px;
      }

    }


    /* =====================================================
       CELULAR
    ===================================================== */

    @media (max-width: 767.98px) {

      .art-card-title {
        min-height: auto;
      }

      .art-image-frame {
        min-height: 0;
      }

      .art-image {
        max-height: none;
      }

    }


    /* =====================================================
       REDUÇÃO DE ANIMAÇÃO
    ===================================================== */

    @media (prefers-reduced-motion: reduce) {

      .art-card {
        transition-duration: 0.01ms !important;
      }

    }

  `;

  document.head.appendChild(styles);
}


// ==========================================================
// CRIA A SEÇÃO ARTES
// ==========================================================

function createArtsSection() {

  // Evita duplicação
  if (document.querySelector("#artes")) {
    return;
  }


  // A seção será inserida antes da Formação
  const formationSection =
    document.querySelector("#formacao");


  const projectsSection =
    document.querySelector("#projetos");


  // Segurança caso alguma seção não exista
  if (!formationSection || !projectsSection) {
    return;
  }


  const section =
    document.createElement("section");


  section.id = "artes";

  section.className =
    "section-padding arts-section";


  // ========================================================
  // GERA TODOS OS CARDS
  // ========================================================

  const cards = portfolioArts

    .map((art) => {

      /*
       * encodeURIComponent permite utilizar corretamente
       * nomes com espaços e caracteres especiais.
       */

      const imagePath =
        `/images/artes/${encodeURIComponent(art.file)}`;


      return `

        <div class="col-12 col-md-6 col-xl-4">

          <article class="art-card h-100">


            <!-- TÍTULO -->

            <div class="art-card-title">

              <h3 class="h5 mb-0">

                ${art.title}

              </h3>

            </div>


            <!-- IMAGEM -->

            <div class="art-image-frame">

              <img

                src="${imagePath}"

                class="art-image"

                alt="Colagem artística ${art.title}"

                loading="lazy"

                decoding="async"

                draggable="false"

              >

            </div>


          </article>

        </div>

      `;

    })

    .join("");


  // ========================================================
  // ESTRUTURA DA SEÇÃO
  // ========================================================

  section.innerHTML = `

    <div class="container">


      <!-- CABEÇALHO DA SEÇÃO -->

      <div
        class="section-heading text-center mx-auto"
      >

        <p class="section-label">

          Criação visual

        </p>


        <h2 class="display-5 fw-bold">

          Artes &amp; Colagens

        </h2>


        <p class="text-body-secondary">

          Seleção de colagens autorais que exploram
          contraste, composição, fotografia e
          experimentação visual.

        </p>

      </div>


      <!-- GALERIA -->

      <div class="row g-4 mt-4 arts-grid">

        ${cards}

      </div>


    </div>

  `;


  // ========================================================
  // INSERE ANTES DA FORMAÇÃO
  // ========================================================

  formationSection.parentNode.insertBefore(
    section,
    formationSection
  );
}


// ==========================================================
// ADICIONA "ARTES" AO MENU PRINCIPAL
// ==========================================================

function createArtsNavigationLink() {

  const menu =
    document.querySelector(
      "#menuPrincipal .navbar-nav"
    );


  if (!menu) {
    return;
  }


  // Evita duplicação
  if (
    menu.querySelector(
      'a[href="#artes"]'
    )
  ) {

    return;

  }


  // Procura Formação para colocar Artes antes dela
  const formationLink =
    menu.querySelector(
      'a[href="#formacao"]'
    );


  const formationItem =
    formationLink?.closest(".nav-item");


  const item =
    document.createElement("li");


  item.className = "nav-item";


  item.innerHTML = `

    <a
      class="nav-link"
      href="#artes"
    >

      Artes

    </a>

  `;


  if (formationItem) {

    menu.insertBefore(
      item,
      formationItem
    );

  } else {

    menu.appendChild(item);

  }
}


// ==========================================================
// PROTEÇÃO DAS IMAGENS E DO SITE
// ==========================================================

function protectPortfolioContent() {

  /*
   * Bloqueia clique com botão direito
   * em todo o portfólio.
   */

  document.addEventListener(
    "contextmenu",
    (event) => {

      event.preventDefault();

    }
  );


  /*
   * Impede que imagens sejam arrastadas
   * para outra aba ou para o computador.
   */

  document.addEventListener(
    "dragstart",
    (event) => {

      if (
        event.target instanceof HTMLImageElement
      ) {

        event.preventDefault();

      }

    }
  );


  /*
   * Impede seleção direta das imagens.
   */

  document.querySelectorAll("img")
    .forEach((image) => {

      image.setAttribute(
        "draggable",
        "false"
      );

    });
}


// ==========================================================
// BLOQUEIA BOTÃO DIREITO DESDE O INÍCIO
// ==========================================================

protectPortfolioContent();


// ==========================================================
// QUANDO A PÁGINA ESTIVER CARREGADA
// ==========================================================

document.addEventListener(
  "DOMContentLoaded",
  () => {


    // ======================================================
    // ADICIONA CSS DA GALERIA
    // ======================================================

    addArtsStyles();


    // ======================================================
    // CRIA A GALERIA
    // ======================================================

    createArtsSection();


    // ======================================================
    // ADICIONA ARTES AO MENU
    // ======================================================

    createArtsNavigationLink();


    // ======================================================
    // DESATIVA ARRASTAR IMAGENS
    // ======================================================

    document.querySelectorAll("img")
      .forEach((image) => {

        image.setAttribute(
          "draggable",
          "false"
        );

      });


    // ======================================================
    // ANO AUTOMÁTICO NO RODAPÉ
    // ======================================================

    const yearElement =
      document.querySelector(
        "#ano-atual"
      );


    if (yearElement) {

      yearElement.textContent =
        new Date().getFullYear();

    }


    // ======================================================
    // MENU MOBILE
    // ======================================================

    const menuElement =
      document.querySelector(
        "#menuPrincipal"
      );


    const menuLinks =
      document.querySelectorAll(
        "#menuPrincipal .nav-link, #menuPrincipal .btn"
      );


    /*
     * Fecha automaticamente o menu
     * Bootstrap no celular após clicar
     * em algum item.
     */

    menuLinks.forEach((link) => {

      link.addEventListener(
        "click",
        () => {

          if (

            menuElement &&

            menuElement.classList.contains(
              "show"
            ) &&

            window.bootstrap

          ) {

            const collapse =
              bootstrap.Collapse
                .getOrCreateInstance(
                  menuElement
                );


            collapse.hide();

          }

        }
      );

    });

  }
);