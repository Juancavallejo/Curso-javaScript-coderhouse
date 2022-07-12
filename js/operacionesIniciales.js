
function operacionesIniciales() {
    /* El calculo se realiza en functions.js */
    const interesPorcentaje = interesBase / 100;
    const interesesFijos = intereses(capital, interesPorcentaje);
    const cuotaMensual = pago(interesPorcentaje, capital, NroCuotas);
    let pagoAmortizacion = amortizacion(cuotaMensual, interesesFijos);
    let saldoFinal = valorFinal(capital, pagoAmortizacion);
    /* Array para el almacenamiento de la primera cuota */
    cuotaPrimera.push(capital, cuotaMensual, pagoAmortizacion, saldoFinal);

    /* Ciclo for para calcular cuota segunda y siguientes  */
    for (let i = 1; i < NroCuotas; i++) {
      let numeroCuota = "Nro " + (i + 1);
      capital = saldoFinal;
      let interesesMensuales = saldoFinal * interesPorcentaje;
      let amortizacionMensual = cuotaMensual - interesesMensuales;
      saldoFinal = capital - amortizacionMensual;
      /* Objeto constructor y array para cuota segunda y siguientes */
      const cuotas = new Cuota(
        numeroCuota,
        capital,
        interesesMensuales,
        amortizacionMensual,
        saldoFinal
      );
      cuotasAlmacenadas.push(cuotas);
    }
    
    /* Operaciones para conocer los intereses totales y dinero total pagado */
    const interesesTotalesString = cuotasAlmacenadas.map(
      (el) => el.interesesMensuales
    );
    const interesesTotales = interesesTotalesString.map((i) => Number(i));
  
    let sumaIntereses = interesesTotales.reduce((anterior, actual) => {
      return anterior + actual;
    });
    const totalIntereses = sumaIntereses + interesesFijos;
  
    const totalPagado = dineroTotal(cuotaMensual, NroCuotas);

    /* Operaciones para mostrar en el HTML la tabla con los conceptos y montos simulados */
    cargarConceptos ()
    cargarPrimeraCuota ( cuotaMensual,interesesFijos,pagoAmortizacion,);
    cargaCuotas(cuotaMensual);
    cargarResultados(totalIntereses.toFixed(2),totalPagado); 
  }