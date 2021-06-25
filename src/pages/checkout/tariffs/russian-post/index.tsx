import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { layout } from '@/reducers'
import { useMediaQuery, useAuthorization } from '@/utils'
import RussianPost from '@/views/pages/checkout/RussianPost'
import { PATH } from '@/config'
import { useRouter } from 'next/router'
import { RootState } from '@/pages/_app'

const CourierPage = () => {
  const { pending } = useAuthorization()
  const dispatch = useDispatch()
  const router = useRouter()
  const city = useSelector((state: RootState) => state.checkout.city)
  const { matches, rendered } = useMediaQuery(`(min-width: 1024px)`)

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
  return <RussianPost />
}

export default CourierPage
