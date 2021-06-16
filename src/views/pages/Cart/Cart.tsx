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
import Totals from './Totals'
import Delivery from './Delivery'

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
    handleChangeAll(true)
  }, [handleChangeAll])

  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <Typography.Title className={styles.title} level={4}>
          Корзина
        </Typography.Title>
        <Typography.Text className={styles.count}>
          {cart?.items.length}{' '}
          {cart &&
            declareNumber(cart?.items.length, [`товар`, `товара`, `товаров`])}
        </Typography.Text>
      </div>
      <div className={styles.left}>
        <Delivery cart={cart} />
        <div className={styles.selection}>
          <Checkbox
            checked={!!(checks.length && !checks.includes(false))}
            indeterminate={checks.includes(true)}
            onChange={(event) => handleChangeAll(event.target.checked)}
          >
            Выбрать все
          </Checkbox>
          <Typography.Text
            className={
              checks.includes(true) ? styles.deletion : styles.deletionHidden
            }
            onClick={handleDeleteMany}
          >
            Удалить выбранное
          </Typography.Text>
        </div>
        <Items
          checks={checks}
          items={cart?.items}
          setCheckValue={setCheckValue}
        />
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
