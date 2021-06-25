import React, { ReactElement } from 'react'
import { useFormikContext, FormikValues } from 'formik'

interface Props {
  children: ReactElement<React.InputHTMLAttributes<HTMLInputElement>>
  name: string
  valuePropName?: string
  getValueFromEvent?: (value: any) => unknown
}

const Item = (props: Props) => {
  const { children, name, valuePropName, getValueFromEvent } = props
  const { values, setFieldValue } = useFormikContext<FormikValues>()

  const child = React.Children.only(children)

  return React.cloneElement(child, {
    onChange: (event: { target: FormikValues }) => {
      setFieldValue(
        name,
        getValueFromEvent
          ? getValueFromEvent(event)
          : event.target[valuePropName || `value`],
      )
    },
    value: values[name] || ``,
  })
}

export default Item
