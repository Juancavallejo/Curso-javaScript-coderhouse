
/* Function calculo de cuota mensual fija */

function pago (interesPorcentaje, capital, cuotas) {
   return (interesPorcentaje * capital)/ (1-Math.pow((1+interesPorcentaje), -cuotas));
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

/* Function para ir guardando la información relativa a cada cuota y crear un array de objetos */

function Cuota (interesesMensuales, amortizacionMensual, saldoFinal) {
    this.interesesMensuales = interesesMensuales.toFixed(2);
    this.amortizacionMensual = amortizacionMensual.toFixed(2);
    this.saldoFinal = saldoFinal.toFixed(2)
    this.info = function () {console.log (`Para esta cuota, se pagará de intereses mensuales $` + this.interesesMensuales, 
    `por concepto de capital un valor de $` + this.amortizacionMensual, `y un saldo final de $` + this.saldoFinal)}
}
