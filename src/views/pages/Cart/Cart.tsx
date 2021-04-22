import { Button, Checkbox, Link, Typography } from '@/components'
import { useCart } from '@/hooks/useCart'
import { declareNumber } from '@/utils'
import { PATH } from '@/config'
import { useFormik } from 'formik'
import { useCallback, useEffect } from 'react'
import { useCartItemDelete } from '@/hooks'
import { useQueryClient } from 'react-query'
import styles from './cart.module.scss'
import Items from './Items'

const Cart = () => {
  const { data: cart } = useCart()
  const { mutateAsync: deleteCartItem } = useCartItemDelete()
  const queryClient = useQueryClient()

  const {
    values: checks,
    setFieldValue: setCheckValue,
    setValues: setChecks,
  } = useFormik({
    initialValues: [] as boolean[],
    onSubmit: () => void null,
  })

  const handleChangeAll = useCallback(
    (value: boolean) => {
      cart && setChecks(cart.items.map(() => value))
    },
    [cart, setChecks],
  )

  const handleDeleteMany = async () => {
    if (!cart) return
    await Promise.all(
      checks.map(
        async (checked, index) =>
          checked && (await deleteCartItem(cart.items[index].id)),
      ),
    )
    await queryClient.invalidateQueries(`cart`)
  }

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
          checked={!!(checks.length && !checks.includes(false))}
          indeterminate={checks.includes(true)}
          onChange={(event) => handleChangeAll(event.target.checked)}
        >
          Выбрать все
        </Checkbox>
        <Typography.Text className={styles.deletion} onClick={handleDeleteMany}>
          Удалить выбранное
        </Typography.Text>
      </div>
      <Items
        checks={checks}
        items={cart?.items}
        setCheckValue={setCheckValue}
      />
      <Typography.Text>Итого {cart?.total_price} ₽</Typography.Text>
      <Link href={PATH.CHECKOUT}>
        <Button size="large">Перейти к оформлению</Button>
      </Link>
    </div>
  )
}

export default Cart
