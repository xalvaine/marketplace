import styles from '@/views/pages/Cart/Items/items.module.scss'
import { Checkbox, Input, Typography } from '@/components'
import { mockSrc } from '@/config'
import { BxMinus, BxPlus } from '@/icons'
import { CartItem } from '@/interfaces'
import { useCartItemPatch } from '@/hooks'
import { Debouncer } from '@/utils'

interface Props {
  item: CartItem
  index: number
  checks: boolean[] | []
  itemsCount: number[]
  setCheckValue: (field: string, value: unknown) => void
  setCountValue: (field: string, value: unknown) => void
}

const debouncer = new Debouncer()

const Item = (props: Props) => {
  const {
    checks,
    index,
    itemsCount,
    setCheckValue,
    item,
    setCountValue,
  } = props
  const { mutateAsync: patchCart } = useCartItemPatch()

  const handleChangeItemsCount = async (quantity: number) => {
    setCountValue(index.toString(), quantity)
    await debouncer.debounce(
      () => patchCart({ id: item.id, quantity, productId: item.id }),
      300,
    )
  }

  const handleCheck = (value: boolean) => setCheckValue(index.toString(), value)

  return (
    <li className={styles.item}>
      <div className={styles.left}>
        <div className={styles.checkboxWrapper}>
          <Checkbox
            checked={!!checks[index]}
            onChange={(event) => handleCheck(event.target.checked)}
          />
        </div>
        <div
          className={styles.imageWrapper}
          onClick={() => handleCheck(!checks[index])}
        >
          <img alt="" className={styles.image} src={mockSrc} />
        </div>
      </div>
      <div className={styles.right}>
        <Typography.Text className={styles.price} weight="bold">
          {parseFloat(item.price)} ₽
        </Typography.Text>
        <Typography.Text secondary className={styles.name} weight="medium">
          {item.name || `Без названия`}
        </Typography.Text>
        <Input
          readOnly
          className={styles.count}
          leftIcon={BxMinus}
          rightIcon={BxPlus}
          value={itemsCount[index] || 0}
          onLeftIconClick={() => handleChangeItemsCount(itemsCount[index] + 1)}
          onRightIconClick={() => handleChangeItemsCount(itemsCount[index] + 1)}
        />
      </div>
    </li>
  )
}

export default Item
