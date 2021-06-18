import { Button, Form, Input, Link, Typography, Steps } from '@/components'
import { PATH } from '@/config'
import { authorizationAPI } from '@/api'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { authorization } from '@/reducers'
import styles from './login.module.scss'

const Login = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const form = Form.useForm({
    initialValues: { username: `` },
    onSubmit: async (values) => {
      dispatch(authorization.setUsername(values.username))
      try {
        await authorizationAPI.post(`/signup`, values)
      } catch (error) {
        if (error.response.status === 409) {
          await authorizationAPI.post(`/signin`, values)
          dispatch(authorization.setAuthorized(true))
        }
      }
      await router.push(PATH.CODE)
    },
  })

  return (
    <>
      <Steps className={styles.steps} current={0}>
        <Steps.Step title="Авторизация" />
        <Steps.Step title="Доставка" />
        <Steps.Step title="Оформление заказа" />
      </Steps>
      <Form className={styles.wrapper} form={form}>
        <Typography.Title level={5}>
          <span className={styles.highlighting}>
            Войдите или зарегистрируйтесь,
          </span>
          чтобы продолжить
        </Typography.Title>
        <Form.Item name="username">
          <Input placeholder="Номер телефона" size="large" />
        </Form.Item>
        <Button block size="large" onClick={form.submitForm}>
          Получить код
        </Button>
        <Link className={styles.link} href="/">
          <Typography.Text className={styles.linkText} weight="medium">
            Войти по почте
          </Typography.Text>
        </Link>
      </Form>
    </>
  )
}

export default Login
