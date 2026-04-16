// Código simple para interactividad
console.log("Página de Manualidades cargada correctamente ✨");

// Efecto suave al hacer clic en los enlaces (ya está en CSS con scroll-behavior)
// Aquí puedes agregar más funciones si lo deseas.

// Ejemplo: Resaltar sección activa al hacer scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav a');

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
            const id = section.getAttribute('id');
            navLinks.forEach(link => {
                link.style.background = '';
                link.style.color = '';
                if(link.getAttribute('href') === '#' + id) {
                    link.style.background = 'var(--color-primario)';
                    link.style.color = 'var(--fondo)';
                }
            });
        }
    });
});
