import { Select } from '@/components'
import { Dispatch, useState } from 'react'
import { Address, City } from '@/interfaces'
import { useCities } from '@/hooks'
import { checkout } from '@/reducers'
import { useDispatch } from 'react-redux'
import { useMediaQuery } from '@/utils'
import styles from './styles.module.scss'

interface Props {
  setAddress?: Dispatch<Address>
}

const Search = (props: Props) => {
  const { setAddress } = props
  const dispatch = useDispatch()
  const [value, setValue] = useState<string>()
  const [query, setQuery] = useState<string>(``)
  const { data: cities } = useCities(query)
  const { matches } = useMediaQuery(`(min-width: 1024px)`)

  const handleSelect = (value: string) => {
    const city = cities?.find((city) => city.unrestricted_value === value)
    if (!cities || !city || !setAddress) return
    dispatch(checkout.setCity(city))
    setValue(value)
    setAddress(
      cities.find((city) => city.unrestricted_value === value)
        ?.data as City['data'],
    )
  }

  return (
    <Select
      className={styles.select}
      placeholder="Введите адрес"
      size="large"
      value={value}
      onChange={(event) => setQuery(event.target.value)}
      onSelect={handleSelect}
    >
      {cities?.slice(0, matches ? 10 : 5).map((item, index) => (
        <Select.Option key={index} value={item.unrestricted_value}>
          {item.unrestricted_value}
        </Select.Option>
      ))}
    </Select>
  )
}

export default Search
