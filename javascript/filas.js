//agregar y eliminar filas

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

    configurarEventosFila(fila);
}

//Funcion para que se calcule el roi por cada fila
function configurarEventosFila(fila) {
    fila.querySelectorAll('input').forEach(input => {
        input.addEventListener('input', function() {
            calcularRoi(fila);
        });
    });
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

//por cada tbody y fila se ejecuta configurarEventosFila(fila)
document.querySelectorAll('tbody tr').forEach(fila => {
    configurarEventosFila(fila);
});