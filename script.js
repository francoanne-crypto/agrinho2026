// Seleciona o botão
const botao = document.getElementById("toggleColorBtn");

// Alterna modo contraste
botao.addEventListener("click", () => {
    document.body.classList.toggle("contraste");

    if (document.body.classList.contains("contraste")) {
        botao.textContent = "Modo Normal";
    } else {
        botao.textContent = "Modo Contraste";
    }
});