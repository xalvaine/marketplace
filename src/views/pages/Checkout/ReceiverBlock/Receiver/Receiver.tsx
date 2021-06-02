import { Button, Form, Input } from '@/components'
import { usePostReceiver } from '@/hooks'
import { Receiver as ReceiverType } from '@/interfaces'
import styles from './receiver.module.scss'

interface Props {
  onClose: () => void
  initialValues?: ReceiverType
}

const Receiver = (props: Props) => {
  const { onClose, initialValues } = props
  const { mutateAsync: postReceiver } = usePostReceiver()

  const form = Form.useForm({
    initialValues: initialValues || {},
    onSubmit: async (values: unknown) => {
      try {
        await postReceiver({
          ...(values as ReceiverType),
          is_primary: true,
        })
        onClose()
      } catch (error) {
        console.error(error)
      }
    },
  })

  return (
    <div className={styles.content}>
      <Form className={styles.form} form={form}>
        <Form.Item name="full_name">
          <Input placeholder="Иван Петров" size="large" />
        </Form.Item>
        <Form.Item name="phone">
          <Input placeholder="+7 987 235 75 25" size="large" />
        </Form.Item>
      </Form>
      <Button
        block
        className={styles.choose}
        size="large"
        onClick={form?.submitForm}
      >
        Сохранить получателя
      </Button>
    </div>
  )
}

export default Receiver
