import CheckoutHeader from '@/views/common/CheckoutHeader'
import { PATH } from '@/config'
import { Button, Form, Input, Steps } from '@/components'
import { useSelector } from 'react-redux'
import { RootState } from '@/pages/_app'
import { usePostUserAddress } from '@/hooks'
import { useRouter } from 'next/router'
import styles from './russian-post.module.scss'

const RussianPost = () => {
  const city = useSelector((state: RootState) => state.checkout.city)
  const registered = useSelector(
    (state: RootState) => state.authorization.registered,
  )
  const { mutateAsync: postUserAddress } = usePostUserAddress()
  const router = useRouter()
  const form = Form.useForm({
    initialValues: {},
    onSubmit: async (values) => {
      await postUserAddress({
        address: city?.data,
        additional_addr: values,
        is_primary: true,
        name: `Курьер`,
        type: `post`,
      })
      await router.push(PATH.CHECKOUT)
    },
  })

  return (
    <div className={styles.wrapper}>
      {!registered && (
        <Steps className={styles.steps} current={1}>
          <Steps.Step title="Авторизация" />
          <Steps.Step title="Доставка" />
          <Steps.Step title="Оформление заказа" />
        </Steps>
      )}
      <CheckoutHeader backLink={PATH.TARIFFS} title="Адрес получения" />
      <Form className={styles.content} form={form}>
        <div className={styles.form}>
          <Input disabled size="large" value={city?.unrestricted_value} />
          <Form.Item name="postal_code">
            <Input placeholder="*Индекс" size="large" />
          </Form.Item>
          <Form.Item name="street">
            <Input placeholder="*Улица" size="large" />
          </Form.Item>
          <div className={styles.pair}>
            <Form.Item name="house">
              <Input placeholder="*Дом" size="large" />
            </Form.Item>
            <Form.Item name="flat">
              <Input placeholder="*Квартира" size="large" />
            </Form.Item>
          </div>
        </div>
        <Button
          block
          className={styles.choose}
          size="large"
          onClick={form.submitForm}
        >
          Сохранить и продолжить
        </Button>
      </Form>
    </div>
  )
}

export default RussianPost
