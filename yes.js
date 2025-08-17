// Cambia el color de tu célula a blanco en Gota.io

(function() {
    'use strict';

    // Espera a que el juego esté cargado
    function setWhiteCell() {
        // Busca el objeto de jugador principal (esto puede variar según la estructura del cliente)
        if (window.myCells && Array.isArray(window.myCells)) {
            window.myCells.forEach(cell => {
                // Forzar color blanco (RGB: 255,255,255)
                cell.color = 0xFFFFFF;
                // Si hay una propiedad de color en formato string, también la puedes forzar:
                cell.colorString = "#FFFFFF";
            });
        }
        // Si el juego usa otra variable para el jugador, ajústalo aquí
    }

    // Intenta aplicar el cambio cada 100ms (puedes ajustar el intervalo)
    setInterval(setWhiteCell, 100);
