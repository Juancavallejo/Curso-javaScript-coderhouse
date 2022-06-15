
let capital = parseInt(prompt("Ingrese el capital a prestar"));
let NroCuotas = parseInt(prompt("Ingrese el numero de cuotas"));
let interesBase = parseFloat(prompt("¿A que interes le presta el banco?"));

/* Array -- Almacenar los intereses, amortización y saldo final de cada cuota */

const cuotasAlmacenadas = [];

/* Selectores del HTML */
/* let capital = document.querySelector (".montoCapital"); */
const tableConceptos = document.querySelector (".tableConceptos")
const listaCuotas = document.querySelector("#lista")
const btnSubmit = document.querySelector(".botonEnviar")

/* Eventos */
btnSubmit.addEventListener ("click", () => {
    cargarConceptos ()
    cargarPrimeraCuota ();
    cargaCuotas();
}) 

const interesPorcentaje = interesBase / 100;
const interesesFijos = intereses(capital, interesPorcentaje);
const cuotaMensual = pago(interesPorcentaje, capital, NroCuotas);
let pagoAmortizacion = amortizacion(cuotaMensual, interesesFijos);
let saldoFinal = valorFinal(capital, pagoAmortizacion);

const CuotaPrimera =[capital, cuotaMensual, pagoAmortizacion, saldoFinal]

/* Información relativa a la segunda cuota y siguientes */

for (let i = 1; i < NroCuotas; i++) {
    let numeroCuota = ("Nro " + (i+1))
    capital = saldoFinal;
    let interesesMensuales = saldoFinal * interesPorcentaje;
    let amortizacionMensual = cuotaMensual - interesesMensuales;
    saldoFinal = capital - amortizacionMensual;
    const cuotas = new Cuota(numeroCuota,capital, interesesMensuales, amortizacionMensual, saldoFinal)
    cuotasAlmacenadas.push(cuotas)
}
