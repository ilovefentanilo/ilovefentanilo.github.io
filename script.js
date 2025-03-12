window.onload = function () {
    const overlay = document.getElementById("overlay");
    const popup = document.getElementById("popup");

    // Mostrar el overlay y el popup
    overlay.style.display = "block";
    popup.style.display = "block";

    // Esperar 5 segundos antes de habilitar los botones
    setTimeout(function () {
        // Activar los botones después de 5 segundos
        document.querySelectorAll("#popup button").forEach(button => {
            button.classList.add("active");
        });
    }, 5000);

    // Animación de texto con GSAP
    gsap.from("#animated-text", { opacity: 0, y: -20, duration: 0.1 });

    const text = "¿Le gustaría que le relatara un poco de lo que le menciono o cómo es la situación? O quizás prefiera que le cuente directamente, ya que, en estos tiempos, nunca se sabe.";
    let index = 0;

    function typeText() {
        if (index < text.length) {
            document.getElementById("animated-text").textContent += text[index];
            index++;
            setTimeout(typeText, 20);
        }
    }

    typeText();
};

// Función para cerrar el popup y el overlay
function closePopup() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("popup").style.display = "none";
}

document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("mouseenter", () => {
        gsap.to(button, { scale: 1.1, duration: 0.2 });
    });
    button.addEventListener("mouseleave", () => {
        gsap.to(button, { scale: 1, duration: 0.2 });
    });
});

function isMobile() {
    return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

document.getElementById('btn4').addEventListener('click', function () {
    const url = 'https://laquetecuento.es/CP';

    if (isMobile()) {
        window.open(url, '_blank');
    } else {
        window.open(url, '_blank', 'width=400,height=445');
    }
});