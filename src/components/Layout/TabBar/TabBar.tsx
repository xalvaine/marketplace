import styles from './tab-bar.module.scss'
import { BxHeart, BxMenu, BxShoppingBag } from '@/icons'
import Typography from '@/components/common/Typography'

const TabBar = () => {
  return (
    <ul className={styles.wrapper}>
      <li className={styles.item}>
        <BxMenu className={styles.icon} />
        <Typography.Text disabled>Каталог</Typography.Text>
      </li>
      <li className={styles.item}>
        <BxShoppingBag className={styles.icon} />
        <Typography.Text disabled>Каталог</Typography.Text>
      </li>
      <li className={styles.item}>
        <BxHeart className={styles.icon} />
        <Typography.Text disabled>Каталог</Typography.Text>
      </li>
    </ul>
  )
}

export default TabBar
