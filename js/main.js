function simuladorPreciosJuegos() {
    alert("Bienvenido! Aqui se mostraran 5 juegos mejores valorados de steam con su precio convertido a pesos argentinos mas impuestos.")

let juegoSeleccionado;
    do {
        juegoSeleccionado = prompt("Selecciona el precio de cual juego deseas conocer:\n\n" + "1. Elden Ring\n" + "2. Stardew Valley\n" + "3. Portal 2\n" + "4. Grand Theft Auto V\n" + "5. Terraria\n");

        switch (juegoSeleccionado) {
            case "1":
                alert("El juego que seleccionaste es elden ring y su precio en USD es $47.99. Esto convertido a pesos argentinos + 65% de impuestos es igual a $68869.");
                break;
            case "2":
                alert("El juego que seleccionaste es stardew valley y su precio en USD es $3.99. Esto convertido a pesos argentinos + 65% de impuestos es igual a $5726.");
                break;
            case "3":
                alert("El juego que seleccionaste es Portal 2 y su precio en USD es $5.79. Esto convertido a pesos argentinos + 65% de impuestos es igual a $8309.");
                break;
            case "4":
                alert("El juego que seleccionaste es Grand Theft Auto V y su precio en USD es $39.98. Esto convertido a pesos argentinos + 65% de impuestos es igual a $57374.");
                break;
            case "5":
                alert("El juego que seleccionaste es terraria y su precio en USD es $5.79. Esto convertido a pesos argentinos + 65% de impuestos es igual a $8309.");
                break;
            default:
                alert("Seleccione una opcion valida, por favor.")
                continue;    
        }

        // preguntara si el usuario desea ver los juegos nuevamente, si ingresa "si, Si, sI, SI" se los mostrara, en caso de que alguien cualquier otro palabra o dato, el simulador lo despedira.
        let opcionBool = prompt("Deseas conocer el precio de otro juego?");
        if (opcionBool !== null && opcionBool.toLowerCase() !== "si") {
            alert("Gracias por utilizar este simulador, nos vemos!");
            break;
        } 

    } while(true);

}

simuladorPreciosJuegos();