import { Cart } from '@/interfaces'
import { Input, Typography } from '@/components'
import { useFormik } from 'formik'
import { useEffect } from 'react'

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
    <>
      {items?.map((item, index) => (
        <li key={index}>
          <Typography.Text secondary>
            {item.name || `Без названия`}
          </Typography.Text>
          <Input readOnly value={values[index] || 0} />
        </li>
      ))}
    </>
  )
}

export default Items
