import { Button, Checkbox, Link, Typography } from '@/components'
import { useCart } from '@/hooks/useCart'
import { declareNumber } from '@/utils'
import { PATH } from '@/config'
import { useFormik } from 'formik'
import { useCallback, useEffect } from 'react'
import styles from './cart.module.scss'
import Items from './Items'

const Cart = () => {
  const { data: cart } = useCart()

  const { values, setFieldValue, setValues } = useFormik({
    initialValues: [] as boolean[],
    onSubmit: () => void null,
  })

  const handleChangeAll = useCallback(
    (value: boolean) => {
      cart && setValues(cart.items.map(() => value))
    },
    [cart, setValues],
  )

  useEffect(() => {
    handleChangeAll(false)
  }, [handleChangeAll])

  return (
    <div className={styles.wrapper}>
      <Typography.Title className={styles.title} level={4}>
        Корзина
      </Typography.Title>
      <Typography.Text className={styles.count}>
        {cart?.items.length}{' '}
        {cart &&
          declareNumber(cart?.items.length, [`товар`, `товара`, `товаров`])}
      </Typography.Text>
      <div className={styles.selection}>
        <Checkbox
          checked={!!(values.length && !values.includes(false))}
          indeterminate={values.includes(true)}
          onChange={(event) => handleChangeAll(event.target.checked)}
        >
          Выбрать все
        </Checkbox>
        <Typography.Text className={styles.deletion}>
          Удалить выбранное
        </Typography.Text>
      </div>
      <Items
        items={cart?.items}
        setFieldValue={setFieldValue}
        values={values}
      />
      <Typography.Text>Итого {cart?.total_price} ₽</Typography.Text>
      <Link href={PATH.CHECKOUT}>
        <Button size="large">Перейти к оформлению</Button>
      </Link>
    </div>
  )
}

export default Cart
