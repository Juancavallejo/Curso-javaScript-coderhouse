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