// Next
import { useRouter } from 'next/router'
// Apollo-client
import { useQuery } from '@apollo/client'
// Queries
import { GET_SESSION } from '../../querys/user'

const useSession = () => {
  const router = useRouter()

  const { data, loading, error } = useQuery(GET_SESSION)

  !loading && error && !data && router.push('/login')

  return data
}

export default useSession
