import { Button, Link, Typography } from '@/components'
import { useCart } from '@/hooks/useCart'
import { declareNumber } from '@/utils'
import { PATH } from '@/config'
import styles from './cart.module.scss'
import Items from './Items'

const Cart = () => {
  const { data: cart } = useCart()

  return (
    <div className={styles.wrapper}>
      <Typography.Title level={4}>Корзина</Typography.Title>
      <Typography.Text>
        {cart?.items.length}{' '}
        {cart &&
          declareNumber(cart?.items.length, [`товар`, `товара`, `товаров`])}
      </Typography.Text>
      <Items items={cart?.items} />
      <Typography.Text>Итого {cart?.total_price} ₽</Typography.Text>
      <Link href={PATH.CHECKOUT}>
        <Button size="large">Перейти к оформлению</Button>
      </Link>
    </div>
  )
}

export default Cart
