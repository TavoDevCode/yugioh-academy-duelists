// Next
import Head from 'next/head'
// Components
import Sidebar from './Sidebar'
// Hooks
// import useSession from '../hooks/auth/useSession'

const UserLayout = ({ children, title }) => {
  return (
    <div>
      <Head>
        <title>Yu-Gi-Oh {title || 'Academy'}</title>
        <link rel="icon" href="icon.png"></link>
      </Head>

      <div className="flex w-screen h-screen">
        <div className="w-1/5 h-screen bg-white">
          <div className="flex justify-start pl-5 items-center w-full h-1/6">
            <img src="icon.png" alt="Logo" className="w-14 h-14 mr-2" />
            <div className="flex flex-col">
              <h1 className="font-sans text-lg font-extrabold">Yu-Gi-Oh</h1>
              <h1 className="text-sm font-medium">Academy</h1>
            </div>
          </div>
          <Sidebar />
        </div>
        <div className="w-4/5 h-screen bg-white">
          <div className="flex w-full h-1/6">
            <div className="flex flex-col justify-center w-3/6 h-full">
              <h1 className=" font-sans text-3xl font-bold">
                Bienvenido a la academia!
              </h1>
              <h2 className="font-sans text-sm font-medium mt-1 opacity-80">
                Aquí podrás registrar tus duelos con los duelistas de la
                academia
              </h2>
            </div>
            <div className="flex items-center justify-end w-3/6 h-full px-10">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-5 border border-transparent shadow-sm text-md font-semibold rounded-md text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
              >
                Cerrar sesión
              </button>
            </div>
          </div>
          <div className="w-full h-5/6 overscroll-auto overflow-auto">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserLayout
