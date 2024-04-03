// Mensaje bienvenida al simulador

alert("Hola! Bienvenido a simulador de compra y calculadora de impuestos de juegos populares de PC.")

// Array de objetos que representan los juegos disponibles para el carrito

let juegosDisponibles = [
    { nombre: "Elden Ring", precioUSD: 47.99 },
    { nombre: "Grand Theft Auto V", precioUSD: 39.99 },
    { nombre: "Red Dead Redemption 2", precioUSD: 59.99 },
    { nombre: "Stardew Valley", precioUSD: 4.99 },
    { nombre: "Resident Evil 8 Village", precioUSD: 29.99 }
];

// Array para guardar los juegos que haya elegido el user

let carrito = [];

// Función para mostrar los juegos que estan disponibles

function mostrarJuegos() {
    let mensaje = "Juegos disponibles:\n";
    juegosDisponibles.forEach((juego, index) => {
        mensaje += `${index + 1}. ${juego.nombre} - $${juego.precioUSD}\n`;
    });
    alert(mensaje);
}

// Función para agregar un juego al carrito

function agregarAlCarrito() {
    const seleccion = parseInt(prompt("Ingrese el número del juego que desea agregar al carrito:"));
    if (seleccion >= 1 && seleccion <= juegosDisponibles.length) {
        const juegoSeleccionado = juegosDisponibles[seleccion - 1];

        const precioARS = (juegoSeleccionado.precioUSD + (juegoSeleccionado.precioUSD * 0.65)) * 1000; // Calcular precio en ARS
        juegoSeleccionado.precioARS = precioARS.toFixed(2); // Almacenar precio en ARS

        carrito.push(juegoSeleccionado);
        alert(`${juegoSeleccionado.nombre} agregado al carrito.`);
    } else {
        alert("Número inválido. Por favor, seleccione un número válido.");
    }
}

// Función para mostrar el contenido del carrito

function mostrarCarrito() {
    let mensaje = "Elemento/s dentro del carrito:\n";
    carrito.forEach(juego => {
        mensaje += `${juego.nombre} - $${juego.precioUSD}\n`;
    });
    alert(mensaje);
}

// Función para calcular el precio del juego en pesos argentinos y que ya tenga sumado los impuestos (65%)

function mostrarPrecioJuego(nombre, precioUSD) {
    let impuestos = precioUSD + (precioUSD * 0.65);
    let precioARS = impuestos * 1000;
    precioARS = precioARS.toFixed(2); // Esto limita los decimales a 2, porque al hacer la cuenta el resultado agregaba muchisimos

    alert("El juego que seleccionaste es " + nombre + " y su precio en USD es $" + precioUSD + ". Esto convertido a pesos argentinos + 65% de impuestos es igual a $" + precioARS + ".");
    
     // Si hay dos o más juegos en el carrito, mostrar la suma de sus precios en ARS
    
    if (carrito.length >= 2) {
        let sumaPreciosARS = carrito.reduce((total, juego) => total + parseFloat(juego.precioARS), 0);
        sumaPreciosARS = sumaPreciosARS.toFixed(2);
        alert(`Suma de precios de los juegos en pesos argentinos: $${sumaPreciosARS}`);
    }
}

// Función principal

function main() {
    let simulador = true;

    while (simulador) {
        mostrarJuegos();

        const opcionCarrito = parseInt(prompt("Ingrese 1 para agregar un juego al carrito o 2 para ver el carrito:"));
        
        switch (opcionCarrito) {
            case 1:
                agregarAlCarrito();
                break;
            case 2:
                mostrarCarrito();
                simulador = false;
                break;
            default:
                alert("Opción inválida. Por favor, ingrese 1 o 2.");
        }
    }

    if (carrito.length > 0) {
        carrito.forEach(juego => {
            mostrarPrecioJuego(juego.nombre, juego.precioUSD);
        });
    } 
}

main();

alert("Gracias por usar este simulador, nos vemos pronto con mas mejoras!");
