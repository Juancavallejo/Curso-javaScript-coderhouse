

/* Eventos */
btnSubmit.addEventListener("click", () => simulacionCuotas() )
btnReset.addEventListener ("click", ()=> location.reload() )

/* Funcionalidad de la app */
const faltanDatos = () => {
    return  (isNaN(parseInt(inputCapital.value))) || (isNaN(parseInt(inputNroCuotas.value))) || (isNaN(parseFloat(inputInteresBase.value)));
}

const calculoSimulacion = () => {
  mainSpinner.innerHTML = mainPreloader ();
    setTimeout(() => {
      capital = parseInt(inputCapital.value);
      NroCuotas = parseInt(inputNroCuotas.value);
      interesBase = parseFloat(inputInteresBase.value);
      operaciones ();
      mainSpinner.innerHTML = "";
      successPersonalizado ();
  }, 1000);
}

const simulacionCuotas = () => {
  
  faltanDatos () == true ?
  errorPersonalizado () :
  calculoSimulacion ();
}

/* Sweet alert  */
const errorPersonalizado = ()=> {
    Swal.fire({
        title: 'Por favor rellene todos los campos necesarios!',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      })
}

const successPersonalizado =()=> {
    Swal.fire({
        icon: 'success',
        title: 'Tu simulación se encuentra disponible',
        showConfirmButton: false,
        timer: 1500
  })
}