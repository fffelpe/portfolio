// Destaca o item clicado

const links = document.querySelectorAll(".menu a");

links.forEach(link => {

    link.addEventListener("click", function(){

        links.forEach(item => item.classList.remove("ativo"));

        this.classList.add("ativo");

    });

});