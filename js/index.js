
/* Eventos */
btnSubmit.addEventListener("click", () => simulacionCuotas() )
btnReset.addEventListener ("click", ()=> location.reload() )
document.addEventListener("DOMContentLoaded", ()=> {valorTasas(URL)})
document.addEventListener("submit", (e)=> {
  e.preventDefault()
})

/*  Funcionalidad de la app 
    Calculo funcion principal por botón enviar pag principal */
  const simulacionCuotas = () => {
  faltanDatos () == true ? //Si faltan datos es verdad entonces
  //sweet alert
  errorPersonalizado () : //Sale error personalizado, sino 
  calculoSimulacion (); // Se hace calculo simulación. 
}

const faltanDatos = () => {
    return  (isNaN(parseInt(inputCapital.value))) || (isNaN(parseInt(inputNroCuotas.value))) || (isNaN(parseFloat(inputInteresBase.value)));
}

const calculoSimulacion = () => {
  mainSpinner.innerHTML = mainPreloader ();
    setTimeout(() => {
      capital = parseInt(inputCapital.value);
      NroCuotas = parseInt(inputNroCuotas.value);
      interesBase = parseFloat(inputInteresBase.value);
      operacionesIniciales ();
      mainSpinner.innerHTML = "";
      //Sweet alert
      successPersonalizado ();
  }, 1000);
}

/* Preloader pagina principal */

const mainPreloader = ()=> {
  return   `  <div class="d-flex justify-content-center m-4">
                  <div class="spinner-border text-primary" role="status">
                      <span class="visually-hidden">Loading...</span>
                  </div>
              </div>`
}
