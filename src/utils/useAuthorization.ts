import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/pages/_app'
import { useRouter } from 'next/router'
import { PATH } from '@/config'
import { authorization } from '@/reducers'
import { authorizationAPI } from '@/api'

export const useAuthorization = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const authorized = useSelector(
    (state: RootState) => state.authorization.authorized,
  )
  const [pending, setPending] = useState(true)

  useEffect(
    () => void (!pending && !authorized && router.push(PATH.LOGIN)),
    [authorized, pending, router],
  )

  useEffect(() => void (authorized && setPending(false)), [authorized])

  useEffect(() => {
    if (!authorized) {
      authorizationAPI
        .get(`/me`)
        .then(() => {
          dispatch(authorization.setAuthorized(true))
          dispatch(authorization.setRegistered(true))
          dispatch(setPending(false))
        })
        .catch((error) => {
          if (error.response?.status === 403) {
            setPending(false)
          }
        })
    }
  }, [authorized, dispatch])

  return { authorized, pending }
}
