import { Button, Input, Typography } from '@/components'
import { BxsDownArrow } from '@/icons'
import { useState } from 'react'
import styles from './promocode.module.scss'

const Promocode = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className={styles.wrapper}>
      <div className={styles.titleWrapper} onClick={() => setOpen(!open)}>
        <Typography.Title className={styles.title} level={5}>
          Промокод или сертификат
        </Typography.Title>
        <BxsDownArrow className={open ? styles.iconRotated : styles.icon} />
      </div>
      <div className={open ? styles.overflowOpen : styles.overflow}>
        <Input
          className={styles.input}
          placeholder="Введите код"
          size="large"
        />
        <Button block size="large">
          Применить промокод
        </Button>
      </div>
    </div>
  )
}

export default Promocode
