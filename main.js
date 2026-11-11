document.addEventListener('DOMContentLoaded', () => {

    // 1. ANIMACIONES DE SCROLL (Fade In Up suave)
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.15 };
    const elementsToAnimate = document.querySelectorAll('.fade-in-up');

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    elementsToAnimate.forEach(el => scrollObserver.observe(el));

    // 2. HEADER STICKY
    const header = document.getElementById('mainHeader');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.style.padding = '0.5rem 0';
                header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
            } else {
                header.style.padding = '1rem 0';
                header.style.boxShadow = 'none';
            }
        }, { passive: true });
    }

    // 3. WIDGET LIVE CHAT (Preparación para Integración Externa)
    const liveChatTrigger = document.getElementById('liveChatTrigger');
    if (liveChatTrigger) {
        liveChatTrigger.addEventListener('click', (e) => {
            e.preventDefault();
            // TODO: Cuando instales Tawk.to o Crisp en Spaceship Hosting,
            // la API de ellos se llamará desde aquí.
            console.log("Activando chat en vivo...");
            alert("Chat en vivo listo para integrarse. (Agrega aquí el script de tu proveedor de chat).");
        });
    }
});