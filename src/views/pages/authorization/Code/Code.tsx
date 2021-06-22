import { Button, Checkbox, Link, Typography, Form, Steps } from '@/components'
import { PATH } from '@/config'
import React, { useEffect } from 'react'
import ReactCodeInput from 'react-code-input'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/pages/_app'
import { authorizationAPI } from '@/api'
import { authorization } from '@/reducers'
import { useRouter } from 'next/router'
import Timer from './Timer'
import styles from './code.module.scss'

const Code = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const { username, registered } = useSelector(
    (state: RootState) => state.authorization,
  )

  const form = Form.useForm({
    initialValues: {
      code: ``,
      agree: false,
    },
    onSubmit: async (values) => {
      const { data } = await authorizationAPI.post(
        registered ? `/signin/finish` : `/signup/finish`,
        {
          username,
          pincode: values.code,
        },
      )
      dispatch(authorization.setUserdata(data))
      dispatch(authorization.setAuthorized(true))
      await router.push(registered ? PATH.CHECKOUT : PATH.DATA)
    },
  })

  useEffect(() => void (!username && router.push(PATH.LOGIN)))

  if (!username) return null
  return (
    <>
      <Steps className={styles.steps} current={0}>
        <Steps.Step title="Авторизация" />
        <Steps.Step title="Доставка" />
        <Steps.Step title="Оформление заказа" />
      </Steps>
      <Form className={styles.wrapper} form={form}>
        <Typography.Title className={styles.title} level={5}>
          Введите код
        </Typography.Title>
        <Typography.Text>
          Мы отправили проверочный код на номер{' '}
          <Typography.Text inline weight="semibold">
            {username}
          </Typography.Text>
        </Typography.Text>
        <Link className={styles.changeNumber} href={PATH.LOGIN}>
          <Button type="link">Изменить номер</Button>
        </Link>
        <Form.Item getValueFromEvent={(code) => code} name="code">
          <ReactCodeInput
            className={styles.code}
            fields={4}
            inputMode="numeric"
            name="code"
            type="number"
          />
        </Form.Item>
        <Timer />
        <Form.Item name="agree" valuePropName="checked">
          <Checkbox className={styles.checkbox}>
            Согласен с <span className={styles.link}>обработкой</span>{' '}
            персональных данных и <span className={styles.link}>условиями</span>{' '}
            продажи товаров
          </Checkbox>
        </Form.Item>
        <Button
          block
          className={styles.signup}
          disabled={form.values.code.length !== 4 || !form.values.agree}
          size="large"
          onClick={form.submitForm}
        >
          {registered ? `Войти` : `Зарегистрироваться`}
        </Button>
        <Typography.Text className={styles.link} weight="medium">
          Не приходит смс?
        </Typography.Text>
      </Form>
    </>
  )
}

export default Code
