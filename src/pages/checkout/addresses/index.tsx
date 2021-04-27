import Addresses from '@/views/pages/Addresses'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { layout } from '@/reducers'

const AddressesPage = () => {
  const dispatch = useDispatch()
  useEffect(() => void dispatch(layout.setLayoutParams({ hideLayout: true })))
  return <Addresses />
}

export default AddressesPage
