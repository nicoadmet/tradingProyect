//tabla principal

// funcion que calcula el ROI
function calcularRoi(fila) {

    try {
        
        //parseFloat convierte el numero a Float, querySelector obtiene el valor de (""), si no tiene valor es igual a 0 
        var tipoOperacion = fila.querySelector("#compra-venta").value;
        var precioEntrada = parseFloat(fila.querySelector(".precio-entrada").value) || 0;
        var precioSalida = parseFloat(fila.querySelector(".precio-salida").value) || 0;
        var inversion = parseFloat(fila.querySelector(".inversion").value) || 0;

        var roi;
        var gananciaPerdida

        //toFixed(2) para limitar los decimales
        if (inversion == 0) {
            roi = 0;
        } else if (tipoOperacion === "SHORT") {
            roi = (((precioEntrada - precioSalida) / inversion) * 10).toFixed(2);
            gananciaPerdida = ((precioEntrada - precioSalida) * (inversion / precioEntrada)).toFixed(2);
        } else { // LONG
            roi = (((precioSalida - precioEntrada) / inversion) * 10).toFixed(2);
            gananciaPerdida = ((precioSalida - precioEntrada) * (inversion / precioEntrada)).toFixed(2);
        }
        
        //le da los valores a las cosas que estamos calculando
        fila.querySelector(".roi").value = roi + '%';
        fila.querySelector(".ganancia-perdida").value = gananciaPerdida;

    } catch (e) { // e = error
        console.error('Error en el calculo del ROI:', e);
    }
    
}








