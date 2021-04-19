import { Button, Select, Typography } from '@/components'
import { ChangeEvent, useState } from 'react'
import Debouncer from '@/utils/debouncer'
import { cartAPI } from '@/api'
import { Address } from '@/interfaces'

const debouncer = new Debouncer()

const Checkout = () => {
  const [value, setValue] = useState<number>()
  const [address, setAddress] = useState<Address[]>()

  const handleGetAddress = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    if (!value) return
    debouncer.debounce(async () => {
      const { data } = await cartAPI.get(`/address`, {
        params: { query: value },
      })
      setAddress(data.data)
    }, 300)
  }

  const handleCheckout = async () => {
    await cartAPI.post(`/orders`, {
      address: address && value !== undefined && address[value],
      pickup_point_id: '2201-001',
      desired_date: '2020-01-01',
      desired_time_period_start: '22:00',
      desired_time_period_end: '23:00',
      promocode: 'test_promo',
      comment: 'asap',
      items: [],
    })
  }

  return (
    <div>
      <Typography.Title level={4}>Чекаут</Typography.Title>
      <Select
        placeholder="Введите адрес"
        value={value}
        onChange={handleGetAddress}
        onSelect={setValue}
      >
        {address?.slice(0, 5).map((item, index) => (
          <Select.Option key={index} value={index}>
            {[item.country, item.city]
              .filter((element) => !!element)
              .join(`, `)}
          </Select.Option>
        ))}
      </Select>
      <Button onClick={handleCheckout}>Оформить заказ</Button>
    </div>
  )
}

export default Checkout
