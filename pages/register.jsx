// Next
import Head from 'next/head'
import Link from 'next/link'
// Hooks
import useRegister from '../hooks/auth/useRegister'

const Register = () => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting
  } = useRegister()

  return (
    <div>
      <Head>
        <title>Yu-Gi-Oh - Register</title>
      </Head>

      <div className="flex items-center min-h-screen bg-gray-50">
        <div className="w-full sm:w-9/12 md:w-7/12 lg:w-3/6 xl:w-2/5 mx-auto bg-white rounded-md">
          <div className="max-w-md mx-auto my-10">
            <div className="text-center">
              <h1 className="font-sans my-3 text-3xl font-bold text-gray-700">
                Registrate aqui!
              </h1>
              <p className="font-sans text-sm text-slate-500">
                Registrate para que puedas unirte a la comunidad.
              </p>
            </div>
            <div className="m-7">
              <form onSubmit={handleSubmit}>
                <div className="mb-5">
                  <label
                    htmlFor="duelist_name"
                    className="font-sans block mb-2 text-md text-gray-800"
                  >
                    Nombre del duelista
                  </label>
                  <input
                    type="text"
                    name="duelist_name"
                    placeholder="Nombre del duelista"
                    className="font-sans w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.duelist_name}
                  />
                </div>

                {errors.duelist_name && touched.duelist_name && (
                  <div className="flex justify-end">
                    <span className="text-sm text-red-600 opacity-80 -mt-3 absolute">
                      {errors.duelist_name}
                    </span>
                  </div>
                )}

                <div className="mb-5">
                  <label
                    htmlFor="user"
                    className="font-sans block mb-2 text-md text-gray-800"
                  >
                    Usuario
                  </label>
                  <input
                    type="text"
                    name="user"
                    placeholder="Usuario"
                    className="font-sans w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.user}
                  />
                </div>

                {errors.user && touched.user && (
                  <div className="flex justify-end">
                    <span className="text-sm text-red-600 opacity-80 -mt-3 absolute">
                      {errors.user}
                    </span>
                  </div>
                )}

                <div className="mb-5">
                  <label
                    htmlFor="password"
                    className="font-sans block mb-2 text-md text-gray-800"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="font-sans w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                </div>

                {errors.password && touched.password && (
                  <div className="flex justify-end">
                    <span className="text-sm text-red-600 opacity-80 -mt-3 absolute">
                      {errors.password}
                    </span>
                  </div>
                )}

                <div className="mb-6 pt-5">
                  <button
                    type="submit"
                    className={`font-sans w-full px-3 py-4 text-white bg-indigo-600 rounded-md focus:outline-none font-semibold text-lg ${
                      isSubmitting ? 'opacity-90' : 'hover:bg-indigo-700'
                    }`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex justify-center items-center">
                        <svg
                          className="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Cargando...
                      </span>
                    ) : (
                      <span>Registrarme</span>
                    )}
                  </button>
                </div>
                <p className="text-sm text-center text-gray-400">
                  ¿Ya tienes una cuenta?{' '}
                  <Link href="/login">
                    <a className="text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500 dark:focus:border-indigo-800">
                      Iniciar sesion!
                    </a>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
