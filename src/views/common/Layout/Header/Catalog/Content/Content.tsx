import { Typography } from '@/components'
import styles from './content.module.scss'
import Brands from './Brands'

const Content = () => {
  return (
    <div className={styles.wrapper}>
      <Typography.Title className={styles.title} level={5}>
        Продукты питания
      </Typography.Title>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Typography.Title className={styles.subtitle} level={6}>
            Чай, кофе и какао
          </Typography.Title>
          <Typography.Text>Чай</Typography.Text>
          <Typography.Text>Кофе</Typography.Text>
        </li>
        <li className={styles.item}>
          <Typography.Title className={styles.subtitle} level={6}>
            Не чай
          </Typography.Title>
          <Typography.Text>Не чай</Typography.Text>
          <Typography.Text>Не кофе</Typography.Text>
          <Typography.Text>Не какао</Typography.Text>
        </li>
        <li className={styles.item}>
          <Typography.Title className={styles.subtitle} level={6}>
            Чай, кофе и какао
          </Typography.Title>
          <Typography.Text>Чай</Typography.Text>
          <Typography.Text>Кофе</Typography.Text>
        </li>
      </ul>
      <Brands />
    </div>
  )
}

export default Content
