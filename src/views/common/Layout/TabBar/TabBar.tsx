import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Link, Badge, Typography } from '@/components'
import classNames from 'classnames'
import { BxHeart, BxHomeAlt, BxMenu, BxShoppingBag } from '@/icons'
import { PATH } from '@/config'
import { useCart } from '@/hooks/showcase/useCart'
import styles from './tab-bar.module.scss'

const tabs = {
  home: {
    icon: BxHomeAlt,
    keys: [PATH.HOME],
    path: PATH.HOME,
    name: `Главная`,
    noticesCount: 0,
  },
  catalog: {
    icon: BxMenu,
    keys: [PATH.CATALOG, PATH._PRODUCTS],
    path: PATH.CATALOG,
    name: `Каталог`,
    noticesCount: 0,
  },
  favourites: {
    icon: BxHeart,
    keys: [PATH.FAVOURITES],
    path: PATH.FAVOURITES,
    name: `Избранное`,
    noticesCount: 0,
  },
  cart: {
    icon: BxShoppingBag,
    keys: [PATH.CART],
    path: PATH.CART,
    name: `Корзина`,
    noticesCount: 0,
  },
}

const TabBar = () => {
  const { pathname } = useRouter()
  const [page, setPage] = useState<string>()
  const { data: cart } = useCart()
  const [cartNotices, setCartNotices] = useState(0)

  useEffect(() => setCartNotices(cart?.items.length || 0), [cart?.items.length])

  useEffect(
    () =>
      Object.values(tabs).forEach(
        (tab) =>
          tab.keys.filter((key) => pathname.includes(key)).length &&
          setPage(tab.path),
      ),
    [pathname],
  )

  tabs.cart.noticesCount = cartNotices

  return (
    <section className={styles.wrapper}>
      <div className={styles.tabBarExpansion} id="tab-bar-extension-root" />
      {Object.values(tabs).map((tab) => (
        <Link key={tab.path} href={tab.path}>
          <div
            className={classNames(
              styles.item,
              page === tab.path && styles.itemSelected,
            )}
          >
            <Badge count={tab.noticesCount} size="small" theme="selected">
              <tab.icon className={styles.icon} />
            </Badge>
            <Typography.Text disabled secondary className={styles.text}>
              {tab.name}
            </Typography.Text>
          </div>
        </Link>
      ))}
    </section>
  )
}

export default TabBar
