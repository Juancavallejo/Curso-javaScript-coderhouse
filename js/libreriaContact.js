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
        timer: 1500
      })
}

const errorEnvioDatos = () => {
  Swal.fire({
    title: 'Parece que no ha sido posible el envio de la simulación, por favor intenta de nuevo en unos minutos.',
    icon: 'error',
    confirmButtonText: 'Aceptar'
  })
  }