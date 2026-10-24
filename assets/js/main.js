// Menu toggle
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#main-nav");

document.body.classList.add("menu-ready"); // Adiciona a classe "menu-ready" ao elemento body, indicando que o menu está pronto para ser usado. Isso pode ser útil para aplicar estilos específicos ou realizar outras ações relacionadas ao menu.

function setMenuOpen(isOpen) {
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  mainNav.classList.toggle("is-open", isOpen);
} // Função para abrir ou fechar o menu, dependendo do estado atual do menu. A função recebe um parâmetro booleano isOpen, que indica se o menu deve ser aberto (true) ou fechado (false). Ela atualiza os atributos aria-expanded e aria-label do botão de alternância do menu, e adiciona ou remove a classe is-open no elemento de navegação principal. 

menuToggle.addEventListener("click", () => {
  setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
}); // Adiciona um ouvinte de evento de clique ao botão de alternância do menu. Quando o botão é clicado, a função setMenuOpen é chamada com o valor oposto do atributo aria-expanded atual do botão. Isso alterna o estado do menu entre aberto e fechado.

mainNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    setMenuOpen(false);
  }
}); // Adiciona um ouvinte de evento de clique ao elemento de navegação principal. Se o alvo do clique for um link (elemento <a>), a função setMenuOpen é chamada com o valor false, fechando o menu.

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
    setMenuOpen(false);
    menuToggle.focus();
  }
}); // Adiciona um ouvinte de evento de pressionamento de tecla ao documento. Se a tecla pressionada for "Escape" e o menu estiver aberto (aria-expanded é "true"), a função setMenuOpen é chamada com o valor false, fechando o menu. Em seguida, o foco é retornado ao botão de alternância do menu.

window.addEventListener("resize", () => {
  if (window.matchMedia("(min-width: 981px)").matches) {
    setMenuOpen(false);
  }
}); // Adiciona um ouvinte de evento de redimensionamento da janela. Se a largura da janela for maior ou igual a 981 pixels, a função setMenuOpen é chamada com o valor false, fechando o menu. Isso garante que o menu seja fechado quando a tela for redimensionada para um tamanho maior, onde o menu pode ser exibido de forma diferente.