
/* Funcionalidad */
btnEnviar.addEventListener ("click", () => envioInformacion ())
btnReset.addEventListener ("click", ()=> location.reload() )

document.addEventListener("submit", (e)=> {
    e.preventDefault()
})

/* Logica */

const envioInformacion = () => {
    faltanDatosFormulario () == true ?
    errorPersonalizado () :
    almacenarDatosUsuario ();
}

const faltanDatosFormulario = () => {
    return (inputNombre.value == "" || inputEmail.value == "")
}
 
const almacenarDatosUsuario = () => {
    const datosUsuario = {
        nombre: inputNombre.value, 
        email: inputEmail.value, 
    }
    let str =JSON.stringify (datosUsuario);
    localStorage.setItem ("datosUsuario", str);
    successPersonalizado ()
}

/* Function para permitir recuperar datos de usuarios anteriores por localStorage */

const recuperarDatosUsuario = () => {
    if (localStorage.getItem ("datosUsuario")) {
        const datosUsuario = JSON.parse(localStorage.getItem("datosUsuario"))
            inputNombre.value = datosUsuario.nombre;
            inputEmail.value = datosUsuario.email
    }
}

recuperarDatosUsuario ()

/* Sweet alert  */
/* ---------------------- */

const errorPersonalizado = ()=> {
    Swal.fire({
        title: 'Por favor rellene todos los campos necesarios!',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      })
}

const successPersonalizado = ()=> {
    Swal.fire({
        title: 'Tu cotización se ha enviado a tu correo electronico!',
        icon: 'success',
        showConfirmButton: false,
        timer: 2000
      })
}