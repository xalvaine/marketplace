import { Select } from '@/components'
import { ChangeEvent, useState } from 'react'
import { Address } from '@/interfaces'
import { cartAPI } from '@/api'
import { Debouncer } from '@/utils'

const debouncer = new Debouncer()

const Tariffs = () => {
  const [value, setValue] = useState<number>()
  const [address, setAddress] = useState<Address[]>()

  const handleGetAddress = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    if (value.length < 3) return
    debouncer.debounce(async () => {
      const { data } = await cartAPI.get(`/address`, {
        params: { query: value },
      })
      setAddress(data.data)
    }, 300)
  }

  // const handleCheckout = async () => {
  //   await cartAPI.post(`/orders`, {
  //     address: address && value !== undefined && address[value],
  //     pickup_point_id: '2201-001',
  //     desired_date: '2020-01-01',
  //     desired_time_period_start: '22:00',
  //     desired_time_period_end: '23:00',
  //     promocode: 'test_promo',
  //     comment: 'asap',
  //   })
  // }

  return (
    <Select
      placeholder="Введите адрес"
      value={value}
      onChange={handleGetAddress}
      onSelect={setValue}
    >
      {address?.slice(0, 5).map((item, index) => (
        <Select.Option key={index} value={index}>
          {[item.country, item.city].filter((element) => !!element).join(`, `)}
        </Select.Option>
      ))}
    </Select>
  )
}

export default Tariffs
