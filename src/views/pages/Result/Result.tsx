import { Button, Link, Typography } from '@/components'
import { BxsCheckCircle } from '@/icons'
import { PATH } from '@/config'
import styles from './result.module.scss'

const Result = () => {
  return (
    <div className={styles.wrapper}>
      <BxsCheckCircle className={styles.icon} />
      <Typography.Text className={styles.mainText} weight="bold">
        Заказ успешно оформлен
      </Typography.Text>
      <Typography.Text className={styles.number} weight="semibold">
        Номер заказа #097-356
      </Typography.Text>
      <Typography.Text className={styles.info}>
        Статус заказа можно отслеживать в вашем личном кабинете{' '}
      </Typography.Text>
      <Link className={styles.back} href={PATH.CHECKOUT}>
        <Button block type="link">
          Перейти в личный кабинет
        </Button>
      </Link>
      <Link className={styles.link} href={PATH.HOME}>
        <Button block size="large" type="secondary">
          На главную
        </Button>
      </Link>
    </div>
  )
}

export default Result
