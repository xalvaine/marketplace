import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/pages/_app'
import { useRouter } from 'next/router'
import { PATH } from '@/config'

export const useAuthorization = () => {
  const router = useRouter()
  const authorized = useSelector(
    (state: RootState) => state.authorization.authorized,
  )
  useEffect(() => void (!authorized && router.push(PATH.LOGIN)))

  return authorized
}
