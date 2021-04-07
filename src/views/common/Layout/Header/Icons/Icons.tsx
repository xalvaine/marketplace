import { BxHeart, BxPackage, BxShoppingBag, BxUserCircle } from '@/icons'
import { Badge } from '@/components'
import styles from './icons.module.scss'

const Icons = () => {
  return (
    <div className={styles.wrapper}>
      <BxUserCircle className={styles.icon} />
      <BxPackage className={styles.pcIcon} />
      <BxHeart className={styles.pcIcon} />
      <Badge className={styles.pcIcon} count={6} size="small" theme="selected">
        <BxShoppingBag />
      </Badge>
    </div>
  )
}

export default Icons
