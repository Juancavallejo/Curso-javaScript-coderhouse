
let capital = parseInt(prompt ("Ingrese el capital a prestar"));
let cuotas = parseInt(prompt("Ingrese el numero de cuotas"));
let interesBase = parseFloat(prompt ("¿A que interes le presta el banco?"));

const interesPorcentaje = interesBase/100;
const interesesFijos = intereses (capital, interesPorcentaje);
const cuotaMensual =  pago (interesPorcentaje, capital, cuotas);
let pagoAmortizacion = amortizacion (cuotaMensual, interesesFijos);
let saldoFinal = valorFinal (capital,pagoAmortizacion);

alert ("Tu cuota mensual fija es de $" + cuotaMensual.toFixed(2));
alert (`Los intereses que se pagaran en tu cuota numero 1 seran de $${interesesFijos.toFixed(2)} y $${pagoAmortizacion.toFixed(2)} por concepto de capital. 
Y tendrás un saldo final de $${saldoFinal.toFixed(2)}`)

for (let i= 1; i < cuotas; i++) {
    capital = saldoFinal
    let interesesMensuales = capital* interesPorcentaje
    let amortizacionMensual = cuotaMensual - interesesMensuales
    saldoFinal = capital - amortizacionMensual
    alert (`Los intereses que se pagaran en tu cuota numero ${i+1} seran de $${interesesMensuales.toFixed(2)} y $${amortizacionMensual.toFixed(2)} por concepto de capital. Y tendrás un saldo final de $${saldoFinal.toFixed(2)}`)
}




