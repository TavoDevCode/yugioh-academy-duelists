import Swal from 'sweetalert2'

export const swalToast = props => {
  const {
    toast = true,
    position = 'top-end',
    showConfirmButton = false,
    timer = 3000,
    timerProgressBar = true,
    icon = 'success',
    title = 'Signed in successfully'
  } = props

  const Toast = Swal.mixin({
    toast: toast,
    position: position,
    showConfirmButton: showConfirmButton,
    timer: timer,
    timerProgressBar: timerProgressBar,
    didOpen: toast => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  Toast.fire({
    icon: icon,
    title: title
  })
}
