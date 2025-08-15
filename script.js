// Animação simples ao rolar a página
document.addEventListener("scroll", () => {
    document.querySelectorAll(".conteudo").forEach(sec => {
        const pos = sec.getBoundingClientRect().top;
        if (pos < window.innerHeight - 50) {
            sec.style.opacity = 1;
            sec.style.transform = "translateY(0)";
        }
    });
});

// Preparando estilo inicial via JS
document.querySelectorAll(".conteudo").forEach(sec => {
    sec.style.opacity = 0;
    sec.style.transform = "translateY(50px)";
    sec.style.transition = "all 0.8s ease";
});
