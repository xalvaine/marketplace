import { Cart } from '@/interfaces'
import { Checkbox, Input, Typography } from '@/components'
import { useFormik } from 'formik'
import { useEffect } from 'react'
import { mockSrc } from '@/config'
import { BxMinus, BxPlus } from '@/icons'
import styles from './items.module.scss'

interface Props {
  items?: Cart['items']
  values: boolean[] | []
  setFieldValue: (field: string, value: unknown) => void
}

const Items = (props: Props) => {
  const { items, setFieldValue, values } = props
  const { values: leftovers, setValues } = useFormik({
    initialValues: [] as number[],
    onSubmit: (values) => console.log(values),
  })

  useEffect(
    () => void (items && setValues(items.map((item) => item.quantity))),
    [items, setValues],
  )

  return (
    <ul className={styles.wrapper}>
      {items?.map((item, index) => (
        <li key={index} className={styles.item}>
          <div
            className={styles.left}
            onClick={() => setFieldValue(index.toString(), !values[index])}
          >
            <div className={styles.checkboxWrapper}>
              <Checkbox checked={!!values[index]} />
            </div>
            <div className={styles.imageWrapper}>
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
              value={leftovers[index] || 0}
            />
          </div>
        </li>
      ))}
    </ul>
  )
}

export default Items
