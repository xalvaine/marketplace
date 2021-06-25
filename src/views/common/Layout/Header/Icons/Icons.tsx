import { BxHeart, BxPackage, BxShoppingBag, BxUserCircle } from '@/icons'
import { Badge, Link } from '@/components'
import { useCart } from '@/hooks/showcase/useCart'
import { PATH } from '@/config'
import { layout } from '@/reducers'
import { useDispatch } from 'react-redux'
import classNames from 'classnames'
import styles from './icons.module.scss'

const Icons = () => {
  const dispatch = useDispatch()
  const { data: cart } = useCart()

  const hideCatalog = () => dispatch(layout.setShowCatalog(false))

  return (
    <div className={styles.wrapper}>
      <BxUserCircle className={styles.icon} />
      <BxPackage className={classNames(styles.icon, styles.pcOnly)} />
      <BxHeart className={classNames(styles.icon, styles.pcOnly)} />
      <Link
        className={classNames(styles.pcOnly)}
        href={PATH.CART}
        onClick={hideCatalog}
      >
        <Badge
          className={styles.icon}
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
