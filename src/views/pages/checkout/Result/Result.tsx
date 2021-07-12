import { Button, Link, Typography } from '@/components'
import { BxsCheckCircle, BxsError } from '@/icons'
import { PATH } from '@/config'
import { useRouter } from 'next/router'
import styles from './result.module.scss'

const Result = () => {
  const router = useRouter()
  return (
    <div className={styles.wrapper}>
      {router.query.result === `success` ? (
        <>
          <BxsCheckCircle className={styles.successIcon} />
          <Typography.Text className={styles.mainText} weight="bold">
            Заказ успешно оформлен
          </Typography.Text>
          <Typography.Text className={styles.number} weight="semibold">
            Номер заказа #097-356
          </Typography.Text>
          <Typography.Text className={styles.info}>
            Статус заказа можно отслеживать в вашем личном кабинете
          </Typography.Text>
          <Link className={styles.back} href={PATH.CHECKOUT}>
            <Button block type="link">
              Перейти в личный кабинет
            </Button>
          </Link>
        </>
      ) : (
        <>
          <BxsError className={styles.failureIcon} />
          <Typography.Text className={styles.mainText} weight="bold">
            Что-то пошло не так
          </Typography.Text>
          <Typography.Text className={styles.errorMessage} weight="semibold">
            Ошибка при оплате
          </Typography.Text>
          <Typography.Text className={styles.info}>
            Мы зарезервировали ваш заказ в личном кабинете на 30 минут
          </Typography.Text>
          <Link className={styles.back} href={PATH.CHECKOUT}>
            <Button block type="link">
              Перейти к заказу
            </Button>
          </Link>
        </>
      )}
      <Link className={styles.link} href={PATH.HOME}>
        <Button block size="large" type="secondary">
          На главную
        </Button>
      </Link>
    </div>
  )
}

export default Result
