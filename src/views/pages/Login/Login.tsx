import { Button, Form, Input, Link, Typography } from '@/components'
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
      await authorizationAPI.post(`/signup`, values)
      dispatch(authorization.setUsername(values.username))
      await router.push(PATH.CODE)
    },
  })

  return (
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
  )
}

export default Login
