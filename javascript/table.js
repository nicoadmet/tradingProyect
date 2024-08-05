//tabla principal

// funcion que calcula el ROI



function calcularRoi() {

    try {
        var tipoOperacion = document.getElementById("compra-venta").value;

        //parseFloat convierte el numero a Float, getElementById obtiene el valor de (""), si no tiene valor es igual a 0 
        var precioEntrada = parseFloat(document.getElementById(".precio-entrada").value) || 0;
        var precioSalida = parseFloat(document.getElementById(".precio-salida").value) || 0;
        var inversion = parseFloat(document.getElementById(".inversion").value) || 0;

            var roi;
            var gananciaPerdida

            if (inversion == 0) {
                roi = 0;
            } else if (tipoOperacion === "SHORT") {
                roi = (((precioEntrada - precioSalida) / inversion) * 10).toFixed(2);
                gananciaPerdida = ((precioEntrada - precioSalida) * (inversion / precioEntrada)).toFixed(2);
            } else { // LONG
                roi = (((precioSalida - precioEntrada) / inversion) * 10).toFixed(2);
                gananciaPerdida = ((precioSalida - precioEntrada) * (inversion / precioEntrada)).toFixed(2);
            }
            
            //toFixed(2) para limitar los decimales
            
             

            document.getElementById(".roi").value = roi + '%';
            document.getElementById(".ganancia-perdida").value = gananciaPerdida;

    } catch (e) { // e = error
        console.error('Error en el calculo del ROI:', e);
    }
    
}


//funcion para agregar filas
function agregarFila() {

        //Obtiene la referencia a la tabla y al tbody
        //querySelector selecciona el primer elemento que coincide con el valor indicado, sea clase o id       
        var table = document.querySelector('table');
        var tbody = table.querySelector('tbody');
    
        //Clona la primera fila y limpiar los campos
        //desde la referencia de tbody, clona el primer tr hijo
        var fila = tbody.querySelector('tr').cloneNode(true);
    
        //Limpia los campos de la nueva fila
        //querySelectorAll selecciona todas las etiquetas input
        //por cada input, cambia el valor a '' (vacio)
        var inputs = fila.querySelectorAll('input');
        inputs.forEach(input => input.value = '');
    
        //selecciona el boton "eliminar"
        //textContent sirve para poner el contenido del boton 
        //le agrega los atributos a la etiqueta button
        var eliminarButton = fila.querySelector('.delete-row-button');
        eliminarButton.textContent = 'Eliminar';
        eliminarButton.setAttribute('onclick', 'eliminarFila(this)');
    
        //añadade la nueva fila al tbody
        //insertBefore inserta un tr como hijo del tbody
        tbody.insertBefore(fila, tbody.querySelector('.row-button'));
    }
    
    //funcion para eliminar una fila
    function eliminarFila(button) {
        // Obtener la fila padre del botón que fue clickeado
        //closest busca el ansestro mas cercano a tr
        var fila = button.closest('tr');
        
        // Eliminar la fila del tbody
        fila.remove();
    }
    
    // addEventListener cuando sucede tal accion (click) se agrega una nueva fila
    document.querySelector('.add-row-button').addEventListener('click', agregarFila);






