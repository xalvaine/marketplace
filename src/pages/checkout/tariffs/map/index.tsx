import Map from '@/views/pages/Map'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { layout } from '@/reducers'
import { PATH } from '@/config'
import { useRouter } from 'next/router'
import { RootState } from '@/pages/_app'

const MapPage = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const city = useSelector((state: RootState) => state.checkout.city)

  useEffect(
    () => void dispatch(layout.setLayoutParams({ hideLayout: true })),
    [dispatch],
  )
  useEffect(() => void (!city && router.push(PATH.TARIFFS)), [city, router])

  return <Map />
}

export default MapPage
