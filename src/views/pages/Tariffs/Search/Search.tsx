import { Select } from '@/components'
import { Dispatch, useState } from 'react'
import { Address } from '@/interfaces'
import { useCities } from '@/hooks'

interface Props {
  setAddress?: Dispatch<Address>
}

const Search = (props: Props) => {
  const { setAddress } = props
  const [value, setValue] = useState<number>()
  const [query, setQuery] = useState<string>(``)
  const { data: cities } = useCities(query)

  const handleSelect = (value: number) => {
    setValue(value)
    if (cities && setAddress) setAddress(cities[value].data)
  }

  return (
    <Select
      placeholder="Введите адрес"
      size="large"
      value={value}
      onChange={(event) => setQuery(event.target.value)}
      onSelect={handleSelect}
    >
      {cities?.slice(0, 5).map((item, index) => (
        <Select.Option key={index} value={index}>
          {item.unrestricted_value}
        </Select.Option>
      ))}
    </Select>
  )
}

export default Search
