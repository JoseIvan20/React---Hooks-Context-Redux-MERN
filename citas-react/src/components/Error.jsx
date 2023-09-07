// SweetAlert2
import Swal from "sweetalert2";

const Error = () => {

  return (

    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Todos los campos son obligatorios.',
        timer: 3200,
        timerProgressBar: true,
        showConfirmButton: false,
        showCancelButton: false,
    })

  )
}

export default Error
