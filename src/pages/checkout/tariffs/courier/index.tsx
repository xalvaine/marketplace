import Courier from '@/views/pages/checkout/Courier'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { layout } from '@/reducers'
import { useMediaQuery, useAuthorization } from '@/utils'
import { RootState } from '@/pages/_app'
import { useRouter } from 'next/router'
import { PATH } from '@/config'

const CourierPage = () => {
  const { pending } = useAuthorization()
  const dispatch = useDispatch()
  const router = useRouter()
  const { matches, rendered } = useMediaQuery(`(min-width: 1024px)`)
  const city = useSelector((state: RootState) => state.checkout.city)

  useEffect(() => {
    if (!rendered) return
    dispatch(
      layout.setLayoutParams({
        hideLayout: !matches,
        simplifyLayout: matches,
      }),
    )
  }, [dispatch, matches, rendered])

  useEffect(() => void (!city && router.push(PATH.TARIFFS)), [city, router])

  if (pending) return null
  return <Courier />
}

export default CourierPage
