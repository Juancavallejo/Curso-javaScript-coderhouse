
/* Funcionalidad */
btnEnviar.addEventListener ("click", () => envioInformacion ())
btnReset.addEventListener ("click", ()=> location.reload())

document.addEventListener("submit", (e)=> {
    e.preventDefault()
})

/* Preloader pagina contact */

const preloader = ()=> {
    return   `  <div class="d-flex justify-content-center m-4">
                    <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>`
}

/* Lógica al activar eventos */

const envioInformacion = () => {
    faltanDatosFormulario () == true ?
    //Sweet alert
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

/* Carga al backend */

const envioAlBackend = () => {
    spinner.innerHTML = preloader ();
        setTimeout(() => {
            envioDatosFetch (URL)
        }, 2000)
}

/* Fetch */

const envioDatosFetch = (URL) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'Envio datos usuario simulación',
          nombre: inputNombre.value,
          correo: inputEmail.value, 
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })

      .then((response) => response.json())
      .then((json) => successPersonalizado ())
      .catch ((error) => {
        BotonErrorEnvioDatos.innerHTML = errorEnvioDatos ()
      })
      .finally (() => spinner.innerHTML = "")
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






