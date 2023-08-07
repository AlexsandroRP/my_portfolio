/* icon navbar */
// Referencia o ícone do menu (representado por um elemento HTML com o id "menu-icon")
let menuIcon = document.querySelector("#menu-icon");

// Referencia a barra de navegação (representada por um elemento HTML com a classe "navbar")
let navbar = document.querySelector(".navbar");

// Define uma função a ser executada quando o ícone do menu é clicado
menuIcon.onclick = () => {
  // Alterna a classe 'bi-x-lg' no elemento do ícone do menu.
  // Se a classe estiver presente, ela é removida; caso contrário, é adicionada.
  // Essa classe representa um ícone "x" (de fechar) e é adicionada quando o menu está aberto.
  menuIcon.classList.toggle("bi-x-lg");

  // Alterna a classe 'active' na barra de navegação.
  // Se a classe estiver presente, ela é removida; caso contrário, é adicionada.
  // A classe 'active' tem um estilo CSS que torna a barra de navegação visível quando o menu está aberto.
  navbar.classList.toggle("active");
};

/* scroll sections active */

// Seleciona todas as seções do documento HTML e armazena na variável 'sections'
let sections = document.querySelectorAll("section");

// Seleciona todos os links de navegação dentro da tag 'nav' do cabeçalho e armazena na variável 'navLinks'
let navLinks = document.querySelectorAll("header nav a");

// Define uma função para ser executada quando o evento de rolagem da janela é acionado
window.onscroll = () => {
  // Para cada seção presente no documento, realiza as seguintes ações:
  sections.forEach((section) => {
    // Obtém a posição atual da rolagem vertical da janela e armazena na variável 'top'
    let top = window.scrollY;

    // Calcula o deslocamento (offset) da seção em relação ao topo da página e subtrai 150 pixels,
    // armazenando o valor na variável 'offset'. Isso é feito para ajustar o ponto de ativação das seções.
    let offset = section.offsetTop - 150;

    // Obtém a altura da seção e armazena na variável 'height'
    let height = section.offsetHeight;

    // Obtém o valor do atributo 'id' da seção e armazena na variável 'id'
    let id = section.getAttribute("id");

    // Verifica se a posição atual da rolagem ('top') está dentro dos limites da seção atual.
    // Se estiver, realiza as seguintes ações:
    if (top >= offset && top < offset + height) {
      // Para cada link de navegação, remove a classe 'active' (destaque) caso esteja presente.
      navLinks.forEach((links) => {
        links.classList.remove("active");

        // Em seguida, adiciona a classe 'active' ao link de navegação cujo atributo 'href' contenha o valor 'id'
        // da seção atual. Isso destaca o link de navegação associado à seção atual.
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  /* sticky navbar */
  // Seleciona o elemento do cabeçalho e adiciona a classe 'sticky' caso a posição de rolagem vertical da janela seja maior que 100 pixels.
  // Caso contrário, remove a classe 'sticky'. Isso cria o efeito de navbar pegajoso.
  let header = document.querySelector("header");
  header.classList.toggle(("sticky", window.scrollY > 100));

  /* remove toggle icon e navbar quando clica em navbar link(scroll) */
  menuIcon.classList.remove("bi-x-lg");
  navbar.classList.remove("active");
};

/* scroll reveal */
// Cria uma nova instância do objeto ScrollReveal que será usado para aplicar efeitos de revelação (animação) nos elementos da página.
ScrollReveal({
  // Configurações do objeto ScrollReveal:
  distance: "80px", // Define a distância que os elementos se movem durante a revelação. Neste caso, os elementos se moverão 80 pixels.
  duration: 2000, // Define a duração da animação de revelação em milissegundos. Neste caso, a duração é de 2000ms (ou 2 segundos).
  delay: 200, // Define o atraso em milissegundos antes que a animação de revelação comece. Neste caso, há um atraso de 200ms (ou 0,2 segundos).
});

// Aplica o efeito de revelação para os elementos com as classes 'home-content' e 'heading', com origem de animação do topo (de cima para baixo).
ScrollReveal().reveal(".home-content, .heading", { origin: "top" });

// Aplica o efeito de revelação para os elementos com as classes 'home-img', 'services-container', 'portfolio-box' e 'contact form', com origem de animação a partir da parte inferior (de baixo para cima).
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);

// Aplica o efeito de revelação para os elementos com as classes 'home-content h1' e 'about-img', com origem de animação a partir da esquerda.
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });

// Aplica o efeito de revelação para os elementos com as classes 'home-content p' e 'about-content', com origem de animação a partir da direita.
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

/* typed js */
const typed = new Typed(".multiple-text", {
  strings: ["Desenvolvedor Frontend"],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 500,
  loop: true,
});
