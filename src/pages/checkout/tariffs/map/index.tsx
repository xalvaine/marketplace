import Map from '@/views/pages/Map'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { layout } from '@/reducers'

const MapPage = () => {
  const dispatch = useDispatch()
  useEffect(
    () => void dispatch(layout.setLayoutParams({ hideLayout: true })),
    [],
  )
  return <Map />
}

export default MapPage
