import CheckoutHeader from '@/views/common/CheckoutHeader'
import { PATH } from '@/config'
import { Button, Link, Radio, Typography } from '@/components'
import { BxEditAlt, BxPlus } from '@/icons'
import { useReceivers } from '@/hooks'
import styles from './receivers.module.scss'

const Receivers = () => {
  const { data: receivers } = useReceivers()

  return (
    <div className={styles.wrapper}>
      <CheckoutHeader backLink={PATH.CHECKOUT} title="Получатели" />
      <div className={styles.content}>
        <Radio.Group name="address">
          {receivers?.map((receiver) => (
            <Radio
              key={receiver.phone}
              className={styles.radio}
              defaultChecked={receiver.is_primary}
              icon={BxEditAlt}
              label={receiver.full_name}
            >
              <Typography.Text inline>{receiver.phone}</Typography.Text>
            </Radio>
          ))}
        </Radio.Group>
        <Link href={PATH.NEW_RECEIVER}>
          <Button block icon={BxPlus} type="link">
            Добавить получателя
          </Button>
        </Link>
        <Link href={PATH.CHECKOUT}>
          <Button block className={styles.choose} size="large">
            Выбрать
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Receivers
