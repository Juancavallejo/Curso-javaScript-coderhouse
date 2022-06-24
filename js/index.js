
/* Array -- Almacenar los intereses, amortización y saldo final de cada cuota */
const cuotaPrimera = [];
const valoresIniciales = [];
const cuotasAlmacenadas = [];
let capital;
let NroCuotas;
let interesBase;

/* Selectores del HTML */ 
const tableConceptos = document.querySelector(".tableConceptos");
const filaResultados = document.querySelector(".filaResultados");
const listaCuotas = document.querySelector("#lista");
const btnSubmit = document.querySelector(".botonEnviar");
const btnReset = document.querySelector ("#botonReset");

/* Eventos */
btnSubmit.addEventListener("click", () => {
  capital = Number(document.querySelector("#montoCapital").value);
  NroCuotas = Number(document.querySelector(".nroCuotas").value);
  interesBase = Number(document.querySelector(".interesMensual").value);
    operaciones()
});


function operaciones() {

  const interesPorcentaje = interesBase / 100;
  const interesesFijos = intereses(capital, interesPorcentaje);
  const cuotaMensual = pago(interesPorcentaje, capital, NroCuotas);
  let pagoAmortizacion = amortizacion(cuotaMensual, interesesFijos);
  let saldoFinal = valorFinal(capital, pagoAmortizacion);

    

  cuotaPrimera.push(capital, cuotaMensual, pagoAmortizacion, saldoFinal);


  for (let i = 1; i < NroCuotas; i++) {
    let numeroCuota = "Nro " + (i + 1);
    capital = saldoFinal;
    let interesesMensuales = saldoFinal * interesPorcentaje;
    let amortizacionMensual = cuotaMensual - interesesMensuales;
    saldoFinal = capital - amortizacionMensual;
    const cuotas = new Cuota(
      numeroCuota,
      capital,
      interesesMensuales,
      amortizacionMensual,
      saldoFinal
    );
    cuotasAlmacenadas.push(cuotas);
  }


  const interesesTotalesString = cuotasAlmacenadas.map(
    (el) => el.interesesMensuales
  );
  const interesesTotales = interesesTotalesString.map((i) => Number(i));

  let sumaIntereses = interesesTotales.reduce((anterior, actual) => {
    return anterior + actual;
  });
  const totalIntereses = sumaIntereses + interesesFijos;

  const totalPagado = dineroTotal(cuotaMensual, NroCuotas);
  cargarConceptos ()
    cargarPrimeraCuota ( cuotaMensual,interesesFijos,pagoAmortizacion,);
    cargaCuotas(cuotaMensual);
    cargarResultados(totalIntereses.toFixed(2),totalPagado); 
    
}
