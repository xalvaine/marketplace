import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { RootState } from '@/pages/_app'
import { PUBLIC_PATH } from '@/config'

const useUser = () => {
  const auth = useSelector((state: RootState) => state.auth)
  const router = useRouter()

  useEffect(() => {
    if (!auth.isLoading && !auth.isLoggedIn) {
      router.push(PUBLIC_PATH.HOME).then()
    }
  }, [auth])

  return { authorized: auth.isLoggedIn }
}

export { useUser }
