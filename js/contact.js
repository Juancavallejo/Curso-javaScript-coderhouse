
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
    envioAlBackend (); 
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

/* Carga al backend */

const envioAlBackend = () => {
    envioDatosFetch ()
    spinner.innerHTML = preloader ();
        setTimeout(() => {
            spinner.innerHTML = ""
            successPersonalizado ()
        }, 1500)
}

const preloader = ()=> {
    return   `  <div class="d-flex justify-content-center m-4">
                    <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>`
}

/* Fetch */

const envioDatosFetch = (URL) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'Envio simulación',
          body: 'nombre',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })

.then((response) => response.json())
.then((json) => console.log(json));
}

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
        title: 'Tu simulación se ha enviado a tu correo electronico!',
        icon: 'success',
        showConfirmButton: false,
        timer: 2000
      })
}