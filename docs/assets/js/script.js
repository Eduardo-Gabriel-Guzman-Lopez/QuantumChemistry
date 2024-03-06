// Ejemplo de archivo JavaScript para agregar funcionalidad a tu sitio web

// Función para cambiar el color de fondo del cuerpo de la página
function cambiarColorFondo(color) {
    document.body.style.backgroundColor = color;
}

// Función para mostrar un mensaje de alerta
function mostrarAlerta() {
    alert("¡Hola desde JavaScript! Este es un mensaje de alerta.");
}

// Función para cargar un saludo en un elemento HTML
function cargarSaludo() {
    var saludo = "¡Hola desde JavaScript!";
    document.getElementById("saludo").innerText = saludo;
}

// Ejecutar funciones al cargar la página
window.onload = function() {
    cambiarColorFondo("#f0f0f0"); // Cambiar el color de fondo del cuerpo de la página
    mostrarAlerta(); // Mostrar un mensaje de alerta
    cargarSaludo(); // Cargar un saludo en un elemento HTML
};

