import { Typography } from '@/components'
import { useCart } from '@/hooks/useCart'
import { declareNumber } from '@/utils'
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
    </div>
  )
}

export default Cart
