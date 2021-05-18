import { Select } from '@/components'
import { ChangeEvent, useState } from 'react'
import { City } from '@/interfaces'
import { cartAPI } from '@/api'
import { Debouncer } from '@/utils'

const debouncer = new Debouncer()

const Search = () => {
  const [value, setValue] = useState<number>()
  const [cities, setCities] = useState<City[]>()

  const handleGetAddress = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    if (value.length < 3) return
    debouncer.debounce(async () => {
      const { data } = await cartAPI.get(`/address`, {
        params: { query: value },
      })
      setCities(data.suggestions)
    }, 300)
  }

  return (
    <Select
      placeholder="Введите адрес"
      size="large"
      value={value}
      onChange={handleGetAddress}
      onSelect={setValue}
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
