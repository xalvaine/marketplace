import CheckoutHeader from '@/views/common/CheckoutHeader'
import { PATH } from '@/config'
import { Button, Form, Input } from '@/components'
import { usePostReceiver } from '@/hooks'
import { Receiver as ReceiverType } from '@/interfaces'
import { useRouter } from 'next/router'
import styles from './receiver.module.scss'

const Receiver = () => {
  const { mutateAsync: postReceiver } = usePostReceiver()
  const router = useRouter()

  const form = Form.useForm({
    initialValues: {},
    onSubmit: async (values: unknown) => {
      await postReceiver({
        ...(values as ReceiverType),
        is_primary: true,
      })
      await router.push(PATH.RECEIVERS)
    },
  })

  return (
    <div className={styles.wrapper}>
      <CheckoutHeader backLink={PATH.CHECKOUT} title="Получатель" />
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
    </div>
  )
}

export default Receiver
