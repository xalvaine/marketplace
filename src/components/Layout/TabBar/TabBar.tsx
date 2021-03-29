import styles from './tab-bar.module.scss'
import { BxHeart, BxMenu, BxShoppingBag } from '@/icons'
import { Typography, Badge } from '@/components/common'

const TabBar = () => {
  return (
    <ul className={styles.wrapper}>
      <li className={styles.item}>
        <Badge count={0} size="small" theme="selected">
          <BxMenu className={styles.icon} />
        </Badge>
        <Typography.Text secondary disabled>
          Каталог
        </Typography.Text>
      </li>
      <li className={styles.item}>
        <Badge count={6} size="small" theme="selected">
          <BxShoppingBag className={styles.icon} />
        </Badge>
        <Typography.Text secondary disabled>
          Корзина
        </Typography.Text>
      </li>
      <li className={styles.item}>
        <Badge count={99} size="small" theme="selected">
          <BxHeart className={styles.icon} />
        </Badge>
        <Typography.Text secondary disabled>
          Избранное
        </Typography.Text>
      </li>
    </ul>
  )
}

export default TabBar
