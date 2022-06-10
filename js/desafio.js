
let capital = parseInt(prompt ("Ingrese el capital a prestar"));
let cuotas = parseInt(prompt("Ingrese el numero de cuotas"));
let interesBase = parseFloat(prompt ("¿A que interes le presta el banco?"));
/* Array -- Almacenar los intereses, amortización y saldo final de cada cuota */
const cuotasAlmacenadas = [];

const interesPorcentaje = interesBase/100;
const interesesFijos = intereses (capital, interesPorcentaje);
const cuotaMensual =  pago (interesPorcentaje, capital, cuotas);
let pagoAmortizacion = amortizacion (cuotaMensual, interesesFijos);
let saldoFinal = valorFinal (capital,pagoAmortizacion);

/* Información relativa a la primera cuota */
alert ("Tu cuota mensual fija es de $" + cuotaMensual.toFixed(2));
alert (`Los intereses que se pagaran en tu cuota numero 1 seran de $${interesesFijos.toFixed(2)} y $${pagoAmortizacion.toFixed(2)} por concepto de capital. 
Y tendrás un saldo final de $${saldoFinal.toFixed(2)}`)

/* Información relativa a la segunda cuota y siguientes */

for (let i= 1; i < cuotas; i++) {
    capital = saldoFinal;
    let interesesMensuales = capital* interesPorcentaje;
    let amortizacionMensual = cuotaMensual - interesesMensuales;
    saldoFinal = capital - amortizacionMensual;
    const cuota1 = new Cuota (interesesMensuales, amortizacionMensual, saldoFinal)
    cuotasAlmacenadas.push (cuota1)
}

/* Bucle for para conocer los intereses, amortización y saldo final de cada cuota 
a partir de la segunda cuota y siguientes */

for (const cuotas of cuotasAlmacenadas) {
    cuotas.info ()
}

/* Nuevo array unicamente de saldos finales en cada cuota con el metodo map */

const saldosFinales = cuotasAlmacenadas.map ((el) => el.saldoFinal)
console.log (saldosFinales)


