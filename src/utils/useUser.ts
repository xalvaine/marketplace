import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { RootState } from '@/pages/_app'
import { PATH } from '@/config'

const useUser = () => {
  const auth = useSelector((state: RootState) => state.auth)
  const router = useRouter()

  useEffect(() => {
    if (!auth.isLoading && !auth.isLoggedIn) {
      router.push(PATH.HOME).then()
    }
  }, [auth])

  return { authorized: auth.isLoggedIn }
}

export { useUser }
