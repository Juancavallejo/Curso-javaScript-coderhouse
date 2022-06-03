

let capital = parseInt(prompt ("Ingrese el capital a prestar"));
let cuotas = parseInt(prompt("Ingrese el numero de cuotas"));
let interesBase = parseFloat(prompt ("¿A que interes le presta el banco?"));

const interesPorcentaje = interesBase/100;
const interesesFijos = intereses (capital, interesPorcentaje);
const cuotaMensual = pago (interesPorcentaje, capital, cuotas);
let pagoAmortizacion = amortizacion (cuotaMensual, interesesFijos);

alert ("Tu cuota mensual fija es de $" + cuotaMensual);
alert ("El primer pago que realices será de $" + pagoAmortizacion + " por concepto de capital" );
alert ("Los intereses que pagaras en tu primera cuota serán de $" + interesesFijos);