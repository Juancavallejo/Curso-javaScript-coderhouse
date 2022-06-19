
/* Function calculo de cuota mensual fija */

function pago (interesPorcentaje, capital, NroCuotas) {
   return (interesPorcentaje * capital)/ (1-Math.pow((1+interesPorcentaje), -NroCuotas));
}

/* Function calculo de pago de capital */

function amortizacion (cuotaMensual, interesesFijos) {
    return (cuotaMensual - interesesFijos);
}

/* Function para calcular el pago de intereses mensuales */

function intereses (capital, interesPorcentaje) {
    return (capital * interesPorcentaje);
}

/* Function para calcular el valor debido al finalizar el ejercicio financiero */

function valorFinal (capital, pagoAmortizacion) {
    return (capital - pagoAmortizacion);
}

/* Function para cargar conceptos*/
function cargarConceptos () {
    const filaConceptos = `<tr>               
                        <th scope="col">Numero de cuotas</th>
                        <th scope="col">Saldo inicial</th>
                        <th scope="col">Cuota fija</th>
                        <th scope="col">Intereses mensules</th>
                        <th scope="col">Pago a capital mensual (amortización)</th>
                        <th scope="col">Saldo final</th>
                    </tr>`
        tableConceptos.innerHTML = filaConceptos;
}

/* Function para cargar primera cuota */
function cargarPrimeraCuota () {
    const filaUno = `<tr>               
                    <td>Nro 1</td>
                    <td>$${CuotaPrimera[0].toFixed(2)}</td>
                    <td>$${cuotaMensual.toFixed(2)}</td>
                    <td>$${interesesFijos.toFixed(2)}</td>
                    <td>$${pagoAmortizacion.toFixed(2)}</td>
                    <td>$${CuotaPrimera[3].toFixed(2)}</td>
                </tr>`
        listaCuotas.innerHTML = filaUno;
}

/* Function para ir guardando la información relativa a cada cuota y crear un array de objetos */

function Cuota (numeroCuota, capital, interesesMensuales, amortizacionMensual, saldoFinal) {
    this.numeroCuota = numeroCuota
    this.capital = capital
    this.interesesMensuales = interesesMensuales.toFixed(2);
    this.amortizacionMensual = amortizacionMensual.toFixed(2);
    this.saldoFinal = saldoFinal.toFixed(2);
    
}

/* Function para cargar cuotas adicionales */

function cargaCuotas () {
    for (cuotas of cuotasAlmacenadas) {
        const fila = `<tr>
                            <td>${cuotas.numeroCuota}</td>
                            <td>$${cuotas.capital.toFixed(2)}</td>
                            <td>$${cuotaMensual.toFixed(2)}</td>
                            <td>$${cuotas.interesesMensuales}</td>
                            <td>$${cuotas.amortizacionMensual}</td>
                            <td>$${cuotas.saldoFinal}</td>
                        </tr>`
        listaCuotas.innerHTML += fila;
    }
}


/* Function conocer dinero total pagado en el prestamo */

function dineroTotal (cuotaMensual,  NroCuotas){
    return (cuotaMensual * NroCuotas)
}

/* Function para cargar resultados finales  */

function cargarResultados () {
    const filaResultadosFinales = `<div class="row border border-primary filaResultados">
                                        <h4 class="col-6">Total intereses pagados </h4>
                                        <p class="col-6 fs-4">$${totalIntereses}</p>
                                        <h4 class="col-6">Total dinero pagado </h4>
                                        <p class="col-6 fs-4">$${totalPagado.toFixed(2)}</p>
                                        <div class="login__buttons d-flex justify-content-center m-2">
                                            <button class="btn btn-primary btn-lg mx-2 mx-md-3" type="reset">Limpiar</button>
                                            <a class="btn btn-primary fs-5" role="button" href="./pages/contact.html"> Guarda tus resultados</a>
                                        </div>
                                    </div>`
        filaResultados.innerHTML = filaResultadosFinales;
}
