import CheckoutHeader from '@/views/common/CheckoutHeader'
import { PATH } from '@/config'
import { Button, Link, Radio, Typography } from '@/components'
import { BxEditAlt, BxPlus } from '@/icons'
import styles from './receivers.module.scss'

const Receivers = () => {
  return (
    <div className={styles.wrapper}>
      <CheckoutHeader backLink={PATH.CHECKOUT} title="Получатель" />
      <div className={styles.content}>
        <Radio.Group name="address">
          <Radio className={styles.radio} icon={BxEditAlt} label="Петров Иван">
            <Typography.Text inline>+79872357525</Typography.Text>
          </Radio>
          <Radio className={styles.radio} icon={BxEditAlt} label="Петров Иван">
            <Typography.Text inline>+79872357525</Typography.Text>
          </Radio>
        </Radio.Group>
        <Link href={PATH.NEW_RECEIVER}>
          <Button block icon={BxPlus} type="link">
            Добавить получателя
          </Button>
        </Link>
        <Link href={PATH.CHECKOUT}>
          <Button block className={styles.choose} size="large">
            Выбрать
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Receivers
