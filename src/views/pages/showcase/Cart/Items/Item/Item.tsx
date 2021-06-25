import { Input, Link, Typography } from '@/components'
import { mockSrc, PATH } from '@/config'
import { BxMinus, BxPlus, BxTrashAlt } from '@/icons'
import { CartItem } from '@/interfaces'
import { useCartItemDelete, useCartItemPatch } from '@/hooks'
import { Debouncer } from '@/utils'
import styles from './item.module.scss'

interface Props {
  item: CartItem
  index: number
  itemsCount: number[]
  setCountValue: (field: string, value: unknown) => void
}

const debouncer = new Debouncer()

const Item = (props: Props) => {
  const { index, itemsCount, item, setCountValue } = props
  const { mutateAsync: patchCartItem } = useCartItemPatch()
  const { mutateAsync: deleteCartItem } = useCartItemDelete()

  const handleChangeItemsCount = async (quantity: number) => {
    const validQuantity = Math.max(0, quantity)
    setCountValue(index.toString(), validQuantity)
    await debouncer.debounce(
      () =>
        patchCartItem({
          id: item.id,
          quantity: validQuantity,
          productId: item.id,
        }),
      300,
    )
  }

  return (
    <li className={styles.item}>
      <Link
        className={styles.imageWrapper}
        href={{ pathname: PATH.PRODUCT, query: { product: item.id } }}
      >
        <img
          alt=""
          className={styles.image}
          src={item.default_image || mockSrc}
        />
      </Link>
      <div className={styles.right}>
        <div className={styles.prices}>
          <Typography.Text className={styles.price} weight="bold">
            {Number(item.price)} ₽
          </Typography.Text>
          <Typography.Text
            secondary
            className={styles.deleteText}
            weight="medium"
            onClick={() => deleteCartItem(item.id)}
          >
            Удалить
          </Typography.Text>
        </div>
        <div className={styles.info}>
          <Typography.Text secondary className={styles.name} weight="medium">
            {item.name || `Без названия`}
          </Typography.Text>
        </div>
        <div className={styles.amount}>
          <div className={styles.quantity}>
            <Input
              readOnly
              className={styles.count}
              leftIcon={BxMinus}
              rightIcon={BxPlus}
              value={itemsCount[index] || 0}
              onLeftIconClick={() =>
                handleChangeItemsCount(itemsCount[index] - 1)
              }
              onRightIconClick={() =>
                handleChangeItemsCount(itemsCount[index] + 1)
              }
            />
            <BxTrashAlt
              className={styles.trash}
              onClick={() => deleteCartItem(item.id)}
            />
          </div>
          <Typography.Text className={styles.singleItemPrice}>
            {Number(item.price) / item.quantity} ₽ / шт.
          </Typography.Text>
        </div>
      </div>
    </li>
  )
}

export default Item
