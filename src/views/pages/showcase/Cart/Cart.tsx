import { Button, Link, Typography } from '@/components'
import { useCart } from '@/hooks/showcase/useCart'
import { declareNumber } from '@/utils'
import { PATH } from '@/config'
import styles from './cart.module.scss'
import Items from './Items'
import Totals from './Totals'
import Delivery from './Delivery'

const Cart = () => {
  const { data: cart } = useCart()

  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <Typography.Title className={styles.title} level={4}>
          Корзина
        </Typography.Title>
        <Typography.Text className={styles.count}>
          {cart?.items.length}
          {` `}
          {cart &&
            declareNumber(cart?.items.length, [`товар`, `товара`, `товаров`])}
        </Typography.Text>
      </div>
      <div className={styles.left}>
        <Delivery cart={cart} />
        <span className={styles.selection} />
        <Items items={cart?.items} />
      </div>
      <div className={styles.right}>
        <Totals cart={cart} />
        <Link href={PATH.CHECKOUT}>
          <Button block size="large">
            Перейти к оформлению
          </Button>
        </Link>
        <Typography.Text disabled className={styles.comment}>
          Способы доставки и оплаты можно выбрать при оформлении заказа
        </Typography.Text>
      </div>
    </div>
  )
}

export default Cart
