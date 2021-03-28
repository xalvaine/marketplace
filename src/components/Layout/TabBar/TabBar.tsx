import styles from './tab-bar.module.scss'
import { BxHeart, BxMenu, BxShoppingBag } from '@/icons'
import Typography from '@/components/common/Typography'
import Badge from '@/components/common/Badge'

const TabBar = () => {
  return (
    <ul className={styles.wrapper}>
      <li className={styles.item}>
        <Badge count={0} size="small" theme="selected">
          <BxMenu className={styles.icon} />
        </Badge>
        <Typography.Text disabled>Каталог</Typography.Text>
      </li>
      <li className={styles.item}>
        <Badge count={6} size="small" theme="selected">
          <BxShoppingBag className={styles.icon} />
        </Badge>
        <Typography.Text disabled>Каталог</Typography.Text>
      </li>
      <li className={styles.item}>
        <Badge count={99} size="small" theme="selected">
          <BxHeart className={styles.icon} />
        </Badge>
        <Typography.Text disabled>Каталог</Typography.Text>
      </li>
    </ul>
  )
}

export default TabBar
