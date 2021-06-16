import { Button, Checkbox, Link, Typography } from '@/components'
import { PATH } from '@/config'
import React, { useState } from 'react'
import ReactCodeInput from 'react-code-input'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/pages/_app'
import { authorizationAPI } from '@/api'
import { authorization } from '@/reducers'
import { useRouter } from 'next/router'
import styles from './code.module.scss'

const Code = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const [code, setCode] = useState(``)
  const { username } = useSelector((state: RootState) => state.authorization)

  const handleSubmit = async () => {
    const { data } = await authorizationAPI.post(
      `/signup/finish`,
      {
        username,
        pincode: code,
      },
      { withCredentials: true },
    )
    dispatch(authorization.setUserdata(data))
    await router.push(PATH.DATA)
  }

  return (
    <div className={styles.wrapper}>
      <Typography.Title className={styles.title} level={5}>
        Введите код
      </Typography.Title>
      <Typography.Text>
        Мы отправили проверочный код на номер{' '}
        <Typography.Text inline weight="semibold">
          +79872357527
        </Typography.Text>
      </Typography.Text>
      <Link className={styles.changeNumber} href={PATH.LOGIN}>
        <Button type="link">Изменить номер</Button>
      </Link>
      <ReactCodeInput
        className={styles.code}
        fields={6}
        inputMode="numeric"
        name="code"
        type="number"
        value={code}
        onChange={setCode}
      />
      <Typography.Text disabled secondary>
        Получить новый код можно через
        <br />
        00:59
      </Typography.Text>
      <Checkbox className={styles.checkbox}>
        Согласен с <span className={styles.link}>обработкой</span> персональных
        данных и <span className={styles.link}>условиями</span> продажи товаров
      </Checkbox>
      <Button
        block
        className={styles.signup}
        disabled={code.length !== 6}
        size="large"
        onClick={handleSubmit}
      >
        Зарегистрироваться
      </Button>
      <Typography.Text className={styles.link} weight="medium">
        Не приходит смс?
      </Typography.Text>
    </div>
  )
}

export default Code
