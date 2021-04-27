import { Button, Input, Typography } from '@/components'
import { BxsDownArrow } from '@/icons'
import styles from './promocode.module.scss'

const Promocode = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleWrapper}>
        <Typography.Title level={5}>Промокод или сертификат</Typography.Title>
        <BxsDownArrow className={styles.icon} />
      </div>
      <Input placeholder="Введите код" size="large" />
      <Button block size="large">
        Применить промокод
      </Button>
    </div>
  )
}

export default Promocode
