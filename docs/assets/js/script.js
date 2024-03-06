document.addEventListener("DOMContentLoaded", function() {
    // Este código se ejecuta cuando el DOM está completamente cargado

    // Agrega eventos de clic a los enlaces del menú de navegación para desplazarse suavemente a las secciones correspondientes
    var menuLinks = document.querySelectorAll('nav .menu a');
    menuLinks.forEach(function(menuLink) {
        menuLink.addEventListener('click', function(event) {
            event.preventDefault(); // Evita el comportamiento predeterminado del enlace
            var targetId = this.getAttribute('href').substring(1); // Obtiene el ID de la sección a la que se desplazará
            var targetSection = document.getElementById(targetId); // Encuentra la sección correspondiente
            if (targetSection) {
                // Desplaza suavemente a la sección objetivo usando scrollIntoView
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Agrega una barra de progreso que muestre cuánto has recorrido en la página
    document.addEventListener("scroll", function() {
        var scrollPosition = window.scrollY;
        var totalHeight = document.body.scrollHeight - window.innerHeight;
        var progress = (scrollPosition / totalHeight) * 100;
        // Actualiza el estilo de la barra de progreso
        document.querySelector('.progress-bar').style.width = progress + '%';
    });

    // Agrega un botón que permita al usuario volver rápidamente al principio de la página
    var backToTopButton = document.querySelector('.back-to-top-button');
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Agrega un evento de clic al botón de menú para mostrar u ocultar el menú en dispositivos móviles
    var menuToggle = document.querySelector('.menu-toggle');
    menuToggle.addEventListener('click', function() {
        document.querySelector('nav').classList.toggle('active');
    });
});

