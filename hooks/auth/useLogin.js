// Next
import { useRouter } from 'next/router'
// Form
import { useFormik } from 'formik'
import * as Yup from 'yup'
// SweetAlert
import { swalToast } from '../../utils/sweetalert'
// Apollo-client
import { useMutation } from '@apollo/client'
// Queries
import { AUTHENTICATE_USER } from '../../querys/user'
// Storage
import { setUserStorage } from '../../utils/storage'

const useLogin = () => {
  const router = useRouter()

  const [authenticateUser] = useMutation(AUTHENTICATE_USER)

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting
  } = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const {
          data: {
            authenticateUser: { token }
          }
        } = await authenticateUser({
          variables: { input: values }
        })

        await setUserStorage(token)

        setSubmitting(false)
        swalToast({ title: 'Sesión iniciada correctamente!' })

        router.push('/')
      } catch (e) {
        setSubmitting(false)
        swalToast({ icon: 'error', title: `${e.message}` })
      }
    }
  })

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting
  }
}

export default useLogin

const initialValues = {
  user: '',
  password: ''
}

const validationSchema = Yup.object({
  user: Yup.string().required('El usuario es requerido!'),
  password: Yup.string().required('La contraseña es requerida!')
})
