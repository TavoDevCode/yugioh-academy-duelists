// Next
import Link from 'next/link'
import { useRouter } from 'next/router'

const Sidebar = () => {
  const router = useRouter()

  return (
    <div className="flex flex-col gap-3 justify-start items-center pt-5 w-full h-4/6 overscroll-auto overflow-auto">
      <Link href="/">
        <a
          className={`flex w-4/6 font-sans justify-start items-center py-3 px-5 text-md font-semibold ${
            router.pathname === '/'
              ? 'text-white bg-gray-900 rounded-2xl shadow-2xl'
              : 'text-gray-700 opacity-80'
          }`}
        >
          <svg className="h-5 w-5 mr-2" fill="currentColor">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
          Inicio
        </a>
      </Link>

      <Link href="/account">
        <a
          className={`flex w-4/6 font-sans justify-start items-center py-3 px-5 text-md font-semibold ${
            router.pathname === '/account'
              ? 'text-white bg-gray-900 rounded-2xl shadow-2xl'
              : 'text-gray-700 opacity-80'
          }`}
        >
          <svg className="h-5 w-5 mr-2" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            />
          </svg>
          Mis datos
        </a>
      </Link>

      <Link href="/duels">
        <a
          className={`flex w-4/6 font-sans justify-start items-center py-3 px-5 text-md font-semibold ${
            router.pathname === '/duels'
              ? 'text-white bg-gray-900 rounded-2xl shadow-2xl'
              : 'text-gray-700 opacity-80'
          }`}
        >
          <svg className="h-5 w-5 mr-2" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
              clipRule="evenodd"
            />
          </svg>
          Mis duelos
        </a>
      </Link>

      <Link href="/statistics">
        <a
          className={`flex w-4/6 font-sans justify-start items-center py-3 px-5 text-md font-semibold ${
            router.pathname === '/statistics'
              ? 'text-white bg-gray-900 rounded-2xl shadow-2xl'
              : 'text-gray-700 opacity-80'
          }`}
        >
          <svg className="h-5 w-5 mr-2" fill="currentColor">
            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
          </svg>
          Mi estadisticas
        </a>
      </Link>
    </div>
  )
}

export default Sidebar
