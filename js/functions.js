
/* Functions para calcular valores iniciales */
function pago(interesPorcentaje, capital, NroCuotas) {
    return (
      (interesPorcentaje * capital) /
      (1 - Math.pow(1 + interesPorcentaje, -NroCuotas))
    );
  }
  
  function amortizacion(cuotaMensual, interesesFijos) {
    return cuotaMensual - interesesFijos;
  }
  
  
  
  function intereses(capital, interesPorcentaje) {
    return capital * interesPorcentaje;
  }
  
  
  
  function valorFinal(capital, pagoAmortizacion) {
    return capital - pagoAmortizacion;
  }

  document.addEventListener("submit", (e)=> {
    e.preventDefault()
})
  
  /* Function cargar conceptos tabla de simulación */
  
  function cargarConceptos() {
    const filaConceptos = `<tr>               
                           <th scope="col">Numero de cuotas</th>
                           <th scope="col">Saldo inicial</th>
                           <th scope="col">Cuota fija</th>
                           <th scope="col">Intereses mensules</th>
                           <th scope="col">Pago a capital mensual (amortización)</th>
                           <th scope="col">Saldo final</th>
                       </tr>`;
    tableConceptos.innerHTML = filaConceptos;
  }
  
  /* Function para cargar primera cuota de la simulación asociada al array cuotaPrimera */

  function cargarPrimeraCuota(cuotaMensual, interesesFijos,pagoAmortizacion) {
      
    const filaUno = `<tr>               
                       <td>Nro 1</td>
                       <td>$${cuotaPrimera[0].toFixed(2)}</td>
                       <td>$${cuotaMensual.toFixed(2)}</td>
                       <td>$${interesesFijos.toFixed(2)}</td>
                       <td>$${pagoAmortizacion.toFixed(2)}</td>
                       <td>$${cuotaPrimera[3].toFixed(2)}</td>
                   </tr>`;
    listaCuotas.innerHTML = filaUno;
  }
  
  /* Function para ir guardando la información relativa a cada cuota y crear un array de objetos */
  
  class Cuota {
    constructor (numeroCuota,capital, interesesMensuales,amortizacionMensual, saldoFinal)
    {
      this.numeroCuota = numeroCuota;
      this.capital = capital;
      this.interesesMensuales = interesesMensuales.toFixed(2);
      this.amortizacionMensual = amortizacionMensual.toFixed(2);
      this.saldoFinal = saldoFinal.toFixed(2);
    }
  }

  /* Function para cargar cuotas adicionales */

  
  
  function cargaCuotas(cuotaMensual) {
    for (cuotas of cuotasAlmacenadas) {
      const fila = `<tr>
                               <td>${cuotas.numeroCuota}</td>
                               <td>$${cuotas.capital.toFixed(2)}</td>
                               <td>$${cuotaMensual.toFixed(2)}</td>
                               <td>$${cuotas.interesesMensuales}</td>
                               <td>$${cuotas.amortizacionMensual}</td>
                               <td>$${cuotas.saldoFinal}</td>
                           </tr>`;
      listaCuotas.innerHTML += fila;
    }
  }
  
  
  /* Function conocer dinero total pagado en el prestamo */
  
  function dineroTotal(cuotaMensual, NroCuotas) {
    return cuotaMensual * NroCuotas;
  }
  
  /* Function para cargar resultados finales  */
  
  function cargarResultados(totalIntereses,totalPagado) {
    const filaResultadosFinales = `<div class="row border border-primary filaResultados">
                                           <h4 class="col-6">Total intereses pagados </h4>
                                           <p class="col-6 fs-4">$${totalIntereses}</p>
                                           <h4 class="col-6">Total dinero pagado </h4>
                                           <p class="col-6 fs-4">$${totalPagado.toFixed(2)}</p>
                                           <div class="login__buttons d-flex justify-content-center m-2">
                                               <button class="btn btn-primary btn-lg mx-2 mx-md-3 btnlimpiar" type="reset">Limpiar</button>
                                               <a class="btn btn-primary fs-5" role="button" href="./pages/contact.html"> Guarda tus resultados</a>
                                           </div>
                                       </div>`;
    filaResultados.innerHTML = filaResultadosFinales;
  
  /* Selectores y evento para listado de resultados finales */
    const btnlimpiar = document.querySelector (".btnlimpiar");
    btnlimpiar.addEventListener ("click", ()=> location.reload() )
  }

  
  