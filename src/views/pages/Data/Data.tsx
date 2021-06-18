import { Button, Form, Input, Typography } from '@/components'
import { useSelector } from 'react-redux'
import { RootState } from '@/pages/_app'
import { authorizationAPI } from '@/api'
import { useRouter } from 'next/router'
import { PATH } from '@/config'
import styles from './data.module.scss'

const Data = () => {
  const { userdata } = useSelector((state: RootState) => state.authorization)
  const router = useRouter()
  const form = Form.useForm({
    initialValues: userdata,
    onSubmit: async (values) => {
      await authorizationAPI.patch(`/profile/${values.id}`, values, {
        withCredentials: true,
      })
      await router.push(PATH.CHECKOUT)
    },
  })

  return (
    <Form className={styles.wrapper} form={form}>
      <Typography.Title level={5}>
        Введите дополнительные данные
      </Typography.Title>
      <div className={styles.inputs}>
        <Form.Item name="first_name">
          <Input placeholder="Иван" size="large" />
        </Form.Item>
        <Form.Item name="last_name">
          <Input placeholder="Петров" size="large" />
        </Form.Item>
        <Form.Item name="email">
          <Input placeholder="ivanpetrov@gmail.com" size="large" />
        </Form.Item>
      </div>
      <Button block size="large" onClick={form.submitForm}>
        Продолжить
      </Button>
    </Form>
  )
}

export default Data
