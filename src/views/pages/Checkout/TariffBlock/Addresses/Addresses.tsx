import { PATH } from '@/config'
import { Button, Link, Radio, Typography } from '@/components'
import { BxEditAlt, BxPlus } from '@/icons'
import styles from './addresses.module.scss'

const Addresses = () => {
  return (
    <div className={styles.content}>
      <Radio.Group className={styles.group} name="address">
        <Radio
          className={styles.radio}
          icon={BxEditAlt}
          label="Постамат X5 1270"
        >
          <Typography.Text inline>Казань, ул. Короленко 35а</Typography.Text>
          <Typography.Text disabled inline className={styles.schedule}>
            Ежедневно 08:00 – 22:00
          </Typography.Text>
        </Radio>
        <Radio
          className={styles.radio}
          icon={BxEditAlt}
          label="Постамат X5 1270"
        >
          <Typography.Text inline>Казань, ул. Короленко 35а</Typography.Text>
          <Typography.Text disabled inline className={styles.schedule}>
            Ежедневно 08:00 – 22:00
          </Typography.Text>
        </Radio>
      </Radio.Group>
      <Link href={PATH.TARIFFS}>
        <Button block className={styles.add} icon={BxPlus} type="link">
          Добавить способ доставки
        </Button>
      </Link>
      <Link href={PATH.CHECKOUT}>
        <Button block className={styles.choose} size="large">
          Выбрать
        </Button>
      </Link>
    </div>
  )
}

export default Addresses
