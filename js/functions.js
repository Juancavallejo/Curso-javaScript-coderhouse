
/* Function calculo de cuota mensual fija */

function pago (interesPorcentaje, capital, cuotas) {
   return (interesPorcentaje * capital)/ (1-Math.pow((1+interesPorcentaje), -cuotas))
}

/* Function calculo de pago de capital */

function amortizacion (cuotaMensual, interesesFijos) {
    return (cuotaMensual - interesesFijos)
}

/* Function para calcular el pago de intereses mensuales */

function intereses (capital, interesPorcentaje) {
    return (capital * interesPorcentaje)
}


