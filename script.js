// Display a welcome message in the console when the page loads
console.log("Welcome to the portfolio!");

// Select the HTML elements using their ID
const boton = document.getElementById('btn-saludo');
const textoParaCambiar = document.getElementById('parrafo-interactivo');
const mensajeOculto = document.getElementById('mensaje-oculto');

// Define arrays for fonts, colors, texts, and hidden messages
const fonts = ["'Roboto', sans-serif", "'Poppins', sans-serif", "serif", "monospace"];
const colors = ["#333", "#e67e22", "#3498db", "#2ecc71"]; // Default, orange, blue, green
const texts = [
    "This text will change when you press the button",
    "Font changed to Poppins!",
    "Now in serif style!",
    "Monospace font here!"
];
const hiddenTexts = [
    "Welcome to my portfolio! Here you will find my projects and skills as a junior developer.",
    "Exploring my coding journey!",
    "Discover my latest projects.",
    "Let's connect and build something great!"
];

// State to cycle through
let state = 0;

// Add interactivity to the button
boton.addEventListener('click', function() {
    
    // Cycle to the next state
    state = (state + 1) % 4;
    
    // Change the text, color, and font of the paragraph
    textoParaCambiar.innerText = texts[state];
    textoParaCambiar.style.color = colors[state];
    textoParaCambiar.style.fontFamily = fonts[state];

    // Show or hide the welcome message (Dynamic effect)
    if (mensajeOculto.style.display === "none") {
        mensajeOculto.innerText = hiddenTexts[state];
        mensajeOculto.style.display = "block";
        boton.innerText = "Hide message";
    } else {
        mensajeOculto.innerText = hiddenTexts[0]; // Reset to original
        mensajeOculto.style.display = "none";
        boton.innerText = "Show again";
    }

    // Simple alert
    alert("Basic interaction completed!");
});