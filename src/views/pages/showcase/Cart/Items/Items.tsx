import { Cart } from '@/interfaces'
import { useFormik } from 'formik'
import { useEffect } from 'react'
import styles from './items.module.scss'
import Item from './Item'

interface Props {
  items?: Cart['items']
}

const Items = (props: Props) => {
  const { items } = props
  const {
    values: itemsCount,
    setValues,
    setFieldValue: setCountValue,
  } = useFormik({
    initialValues: [] as number[],
    onSubmit: (values) => console.log(values),
  })

  useEffect(
    () => void (items && setValues(items.map((item) => item.quantity))),
    [items, setValues],
  )

  return (
    <ul className={styles.wrapper}>
      {items
        ?.sort((a, b) => a.id - b.id)
        .map((item, index) => (
          <Item
            key={index.toString()}
            index={index}
            item={item}
            itemsCount={itemsCount}
            setCountValue={setCountValue}
          />
        ))}
    </ul>
  )
}

export default Items
