import { Input, Slider, Typography } from '@/components'
import { useState } from 'react'
import styles from './range.module.scss'

const Range = () => {
  const [priceRange, setPriceRange] = useState([0, 100])
  return (
    <div>
      <Typography.Title level={6}>Цена</Typography.Title>
      <Slider
        range
        className={styles.slider}
        step={20}
        value={priceRange}
        onChange={setPriceRange}
      />
      <div className={styles.inputs}>
        <Input readOnly value={priceRange[0]} />
        <Input readOnly value={priceRange[1]} />
      </div>
    </div>
  )
}

export default Range
