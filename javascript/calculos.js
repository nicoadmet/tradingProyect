//tabla principal

// funcion que calcula el ROI
function calcularRoi(fila) {
    try {
        
        //parseFloat convierte el numero a Float, querySelector obtiene el valor de (""), si no tiene valor es igual a 0 
        var tipoOperacion = fila.querySelector("#compra-venta").value;
        var precioEntrada = parseFloat(fila.querySelector(".precio-entrada").value) || 0;
        var precioSalida = parseFloat(fila.querySelector(".precio-salida").value) || 0;
        var inversion = parseFloat(fila.querySelector(".inversion").value) || 0;
        
        var celdaShortLong = fila.querySelector(".celda-compra-venta");
        var celdaLong = fila.querySelector(".long");

        var roi;
        var gananciaPerdida

        //toFixed(2) para limitar los decimales
        if (inversion == 0) {
            roi = 0;
        } else if (tipoOperacion === "SHORT") {
            roi = (((precioEntrada - precioSalida) / inversion) * 10).toFixed(2);
            gananciaPerdida = ((precioEntrada - precioSalida) * (inversion / precioEntrada)).toFixed(2);
            
            //color celda de compra/venta
            celdaShortLong.style.backgroundColor = "rgb(0, 153, 102)";

        } else { // LONG
            roi = (((precioSalida - precioEntrada) / inversion) * 10).toFixed(2);
            gananciaPerdida = ((precioSalida - precioEntrada) * (inversion / precioEntrada)).toFixed(2);

            //color celda de compra/venta
            celdaShortLong.style.backgroundColor = "rgb(204, 51, 51)";
        }
        
        //le da los valores a las cosas que estamos calculando
        fila.querySelector(".roi").value = roi + '%';
        fila.querySelector(".ganancia-perdida").value = gananciaPerdida;


        /////color de las celdas/////
        var inputRoi = fila.querySelector(".roi");
        var celdaRoi = fila.querySelector(".celda-roi");

        var inputGanancias = fila.querySelector(".celda-ganancia-perdida");
        var celdaGanancias = fila.querySelector(".ganancia-perdida");

        if (roi > 0) {
            celdaRoi.style.backgroundColor = "rgb(0, 153, 102)";
            inputRoi.style.backgroundColor = "rgb(1, 179, 120)";

            celdaGanancias.style.backgroundColor = "rgb(0, 153, 102)";
            inputGanancias.style.backgroundColor = "rgb(1, 179, 120)";
            
        } else if (roi < 0) { 
            celdaRoi.style.backgroundColor = "rgb(204, 51, 51)";
            inputRoi.style.backgroundColor = "rgb(201, 64, 64)";

            celdaGanancias.style.backgroundColor = "rgb(204, 51, 51)";
            inputGanancias.style.backgroundColor = "rgb(201, 64, 64)";
        }

    } catch (e) { // e = error
        console.error('Error en el calculo del ROI:', e);
    }
    
}













