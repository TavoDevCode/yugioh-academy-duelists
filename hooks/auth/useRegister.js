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
import { ADD_USER } from '../../querys/user'

const useRegister = () => {
  const router = useRouter()

  const [addUser] = useMutation(ADD_USER)

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
        await addUser({
          variables: { input: values }
        })

        setSubmitting(false)
        swalToast({ title: 'Sesión iniciada correctamente!' })

        router.push('/login')
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

export default useRegister

const initialValues = {
  duelist_name: '',
  user: '',
  password: ''
}

const validationSchema = Yup.object({
  duelist_name: Yup.string().required('El nombre del duelista es requerido!'),
  user: Yup.string().required('El usuario es requerido!'),
  password: Yup.string().required('La contraseña es requerida!')
})
