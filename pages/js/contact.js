
/* Array para almacenar datos de usuario */
let infoUsuario = [] 

/* Selectores del HTML */
const inputNombre = document.querySelector ("#inputNombre");
const inputEmail = document.querySelector ("#inputEmail");

const btnEnviar = document.querySelector ("#bttEnviar")
const btnReset = document.querySelector ("#bttReset")


/* Funcionalidad */

document.addEventListener("submit", (e)=> {
    e.preventDefault()
})

btnEnviar.addEventListener ("click", () => {
    const datosUsuario = {
        nombre: inputNombre.value, 
        email: inputEmail.value, 
    }
    let str =JSON.stringify (datosUsuario);
    localStorage.setItem ("datosUsuario", str);
   /*  infoUsuario.push (datosUsuario);
    localStorage.setItem ("datosUsuario", JSON.stringify(infoUsuario)) */
})

function recuperarDatosUsuario () {
    if (localStorage.getItem ("datosUsuario")) {
        const datosUsuario = JSON.parse(localStorage.getItem("datosUsuario"))
            inputNombre.value = datosUsuario.nombre;
            inputEmail.value = datosUsuario.email
    }
}

recuperarDatosUsuario ()


btnReset.addEventListener("click", ()=> {
    inputNombre.value = ""
    inputCorreo.value = ""
})