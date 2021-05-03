import CheckoutHeader from '@/views/common/CheckoutHeader'
import { PATH } from '@/config'
import { Button, Input, Link } from '@/components'
import styles from './receiver.module.scss'

const Receiver = () => {
  return (
    <div className={styles.wrapper}>
      <CheckoutHeader backLink={PATH.CHECKOUT} title="Получатель" />
      <div className={styles.content}>
        <div className={styles.form}>
          <Input placeholder="Иван Петров" size="large" />
          <Input placeholder="+7 987 235 75 25" size="large" />
        </div>
        <Link href={PATH.RECEIVERS}>
          <Button block className={styles.choose} size="large">
            Сохранить получателя
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Receiver
