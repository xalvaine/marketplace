import { DetailedHTMLProps, FormHTMLAttributes } from 'react'
import { FormikProvider, useFormik } from 'formik'
import { FormInstance } from '@/components'
import Item from './Item'

interface Props
  extends DetailedHTMLProps<
    FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {
  form: FormInstance
}

const Form = (props: Props) => {
  const { children, form, ...rest } = props

  return (
    <FormikProvider value={form}>
      <form {...rest}>{children}</form>
    </FormikProvider>
  )
}

Form.useForm = useFormik
Form.Item = Item
export default Form
