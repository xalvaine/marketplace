import { BxHeart, BxPackage, BxShoppingBag, BxUserCircle } from '@/icons'
import { Badge, Link } from '@/components'
import { useCart } from '@/hooks/useCart'
import { PATH } from '@/config'
import { layout } from '@/reducers'
import { useDispatch } from 'react-redux'
import styles from './icons.module.scss'

const Icons = () => {
  const dispatch = useDispatch()
  const { data: cart } = useCart()

  const hideCatalog = () => dispatch(layout.setShowCatalog(false))

  return (
    <div className={styles.wrapper}>
      <BxUserCircle className={styles.icon} />
      <BxPackage className={styles.pcIcon} />
      <BxHeart className={styles.pcIcon} />
      <Link href={PATH.CART} onClick={hideCatalog}>
        <Badge
          className={styles.pcIcon}
          count={cart?.items.length}
          size="small"
          theme="selected"
        >
          <BxShoppingBag />
        </Badge>
      </Link>
    </div>
  )
}

export default Icons
