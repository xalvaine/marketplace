import { Typography } from '@/components'
import styles from './totals.module.scss'

const Totals = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.titleWrapper}>
          <Typography.Title level={5}>Ваш заказ</Typography.Title>
          <Typography.Text disabled>3 товара 1, 20 кг.</Typography.Text>
        </div>
        <Typography.Text className={styles.text} weight="medium">
          Товары <span className={styles.right}>1041 ₽</span>
        </Typography.Text>
        <Typography.Text className={styles.text} weight="medium">
          Доставка <span className={styles.right}>141 ₽</span>
        </Typography.Text>
      </div>
      <Typography.Text className={styles.total} weight="bold">
        Итого <span className={styles.right}>890 ₽</span>
      </Typography.Text>
    </>
  )
}

export default Totals
