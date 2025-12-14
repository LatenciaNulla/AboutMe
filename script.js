// Alternar entre modo claro y oscuro
const button = document.getElementById("themeToggle");

button.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        button.textContent = "Cambiar a Tema Claro";
    } else {
        button.textContent = "Cambiar a Tema Oscuro";
    }
});
