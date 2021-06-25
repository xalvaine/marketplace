import { DetailedHTMLProps, FormHTMLAttributes } from 'react'
import { FormikProvider, useFormik } from 'formik'
import { FormInstance } from './formInstance'
import Item from './Item'

interface Props
  extends DetailedHTMLProps<
    FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {
  form: unknown
}

const Form = (props: Props) => {
  const { children, form, ...rest } = props

  return (
    <FormikProvider value={form as unknown as FormInstance}>
      <form {...rest}>{children}</form>
    </FormikProvider>
  )
}

Form.useForm = useFormik
Form.Item = Item
export default Form
