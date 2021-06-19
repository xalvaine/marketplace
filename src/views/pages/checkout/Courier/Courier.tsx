import CheckoutHeader from '@/views/common/CheckoutHeader'
import { Button, Input, Typography, Form, Steps } from '@/components'
import { BxsDownArrow } from '@/icons'
import { PATH } from '@/config'
import { useSelector } from 'react-redux'
import { RootState } from '@/pages/_app'
import { usePostUserAddress } from '@/hooks'
import { useRouter } from 'next/router'
import styles from './courier.module.scss'

const Courier = () => {
  const city = useSelector((state: RootState) => state.checkout.city)
  const { mutateAsync: postUserAddress } = usePostUserAddress()
  const router = useRouter()
  const form = Form.useForm({
    initialValues: {},
    onSubmit: async (values) => {
      await postUserAddress({
        address: city?.data,
        additional_addr: values,
        is_primary: true,
      })
      await router.push(PATH.CHECKOUT)
    },
  })

  return (
    <div className={styles.wrapper}>
      <Steps className={styles.steps} current={1}>
        <Steps.Step title="Авторизация" />
        <Steps.Step title="Доставка" />
        <Steps.Step title="Оформление заказа" />
      </Steps>
      <CheckoutHeader backLink={PATH.TARIFFS} title="Адрес получения" />
      <Form className={styles.content} form={form}>
        <div className={styles.form}>
          <Input disabled size="large" value={city?.unrestricted_value} />
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
        <div className={styles.sectionTitleWrapper}>
          <Typography.Title level={6}>Дополнительно</Typography.Title>
          <BxsDownArrow className={styles.icon} />
        </div>
        <div className={styles.form}>
          <Form.Item name="entrance">
            <Input placeholder="Подъезд" size="large" />
          </Form.Item>
          <Form.Item name="floor">
            <Input placeholder="Этаж" size="large" />
          </Form.Item>
          <Form.Item name="intercom">
            <Input placeholder="Домофон" size="large" />
          </Form.Item>
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

export default Courier
