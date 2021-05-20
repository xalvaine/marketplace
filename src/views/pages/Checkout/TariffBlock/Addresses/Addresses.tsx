import { PATH } from '@/config'
import { Button, Form, Link, Radio, Typography } from '@/components'
import { BxEditAlt, BxPlus } from '@/icons'
import { UserAddress } from '@/interfaces'
import styles from './addresses.module.scss'

interface Props {
  onClose: () => void
  addresses?: UserAddress[]
}

const Addresses = (props: Props) => {
  const { onClose, addresses } = props

  const form = Form.useForm({
    initialValues: addresses?.find(
      (address) => address.is_primary,
    ) as UserAddress,
    onSubmit: async () => {
      try {
        //await patchReceiver(values)
        onClose()
      } catch (error) {
        console.error(error)
      }
    },
  })

  return (
    <div className={styles.content}>
      <Radio.Group className={styles.group} name="address">
        {addresses?.map((_address, index) => (
          <Radio
            key={index.toString()}
            className={styles.radio}
            icon={BxEditAlt}
            label="Постамат X5 1270"
          >
            <Typography.Text inline>Казань, ул. Короленко 35а</Typography.Text>
            <Typography.Text disabled inline className={styles.schedule}>
              Ежедневно 08:00 – 22:00
            </Typography.Text>
          </Radio>
        ))}
      </Radio.Group>
      <Link href={PATH.TARIFFS}>
        <Button block className={styles.add} icon={BxPlus} type="link">
          Добавить способ доставки
        </Button>
      </Link>
      <Button
        block
        className={styles.choose}
        size="large"
        onClick={form.submitForm}
      >
        Выбрать
      </Button>
    </div>
  )
}

export default Addresses
