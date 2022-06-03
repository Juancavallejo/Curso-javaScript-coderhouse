
/* Function calculo de cuota mensual fija */

function pago (interesPorcentaje, capital, cuotas) {
   return (interesPorcentaje * capital)/ (1-Math.pow((1+interesPorcentaje), -cuotas))
}

/*  */

function amortizacion (cuotaMensual, interesesFijos) {
    return (cuotaMensual - interesesFijos)
}

function intereses (capital, interesPorcentaje) {
    return (capital * interesPorcentaje)
}


