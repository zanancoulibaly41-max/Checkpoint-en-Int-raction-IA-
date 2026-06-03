// Bascule thème clair / sombre
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "☀️ Mode clair";
    } else {
        themeBtn.textContent = "🌙 Mode sombre";
    }
});

// Animation d'apparition des cartes
window.addEventListener("load", () => {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.classList.add("show");
    });
});