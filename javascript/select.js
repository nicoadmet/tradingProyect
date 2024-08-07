// Select LONG-SHORT

document.addEventListener('DOMContentLoaded', function() { //DOMContentLoaded evento que se asegura de que se haya cargado todo el html en el DOM
    var selectElement = document.getElementById('compra-venta');

    // Función para actualizar el color del botón select
    function actualizarColor() {
        var valorSeleccionado = selectElement.value;
        if (valorSeleccionado === 'SHORT') {
            selectElement.classList.add('short');
            selectElement.classList.remove('long');
        } else if (valorSeleccionado === 'LONG') {
            selectElement.classList.add('long');
            selectElement.classList.remove('short');
        }
    }

    // Configura el evento oninput para cambiar el color cuando se selecciona una opción
    selectElement.addEventListener('change', actualizarColor);

    // Establece el color inicial en función de la opción seleccionada por defecto
    actualizarColor();
});