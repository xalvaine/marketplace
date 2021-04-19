import { Cart } from '@/interfaces'
import { Input, Typography } from '@/components'
import { useFormik } from 'formik'
import { useEffect } from 'react'
import { mockSrc } from '@/config'
import { BxMinus, BxPlus } from '@/icons'
import styles from './items.module.scss'

interface Props {
  items?: Cart['items']
}

const Items = (props: Props) => {
  const { items } = props
  const { values, setValues } = useFormik({
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
          <div className={styles.left}>
            <div className={styles.checkboxWrapper} />
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
              value={values[index] || 0}
            />
          </div>
        </li>
      ))}
    </ul>
  )
}

export default Items
