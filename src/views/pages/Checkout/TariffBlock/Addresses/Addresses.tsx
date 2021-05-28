import { PATH } from '@/config'
import { Button, Form, Link, Radio, Typography } from '@/components'
import { BxTrashAlt, BxPlus } from '@/icons'
import { UserAddress } from '@/interfaces'
import { usePatchUserAddress } from '@/hooks'
import styles from './addresses.module.scss'

interface Props {
  onClose: () => void
  addresses?: UserAddress[]
}

const Addresses = (props: Props) => {
  const { onClose, addresses } = props
  const { mutateAsync: patchReceiver } = usePatchUserAddress()

  const form = Form.useForm({
    initialValues: addresses?.find(
      (address) => address.is_primary,
    ) as UserAddress,
    onSubmit: async (values) => {
      try {
        await patchReceiver(values)
        onClose()
      } catch (error) {
        console.error(error)
      }
    },
  })

  return (
    <div className={styles.content}>
      <Radio.Group className={styles.group} name="address">
        {addresses?.map((address) => (
          <Radio
            key={address.id}
            className={styles.radio}
            defaultChecked={address.is_primary}
            icon={BxTrashAlt}
            label={address.name}
            onChange={(event) =>
              event.target.checked && form.setValues(address)
            }
          >
            <Typography.Text inline>
              {[
                address.address?.city_with_type,
                address.additional_addr?.street,
                address.additional_addr?.entrance,
              ]
                .filter((word) => !!word)
                .join(`, `)}
            </Typography.Text>
            <Typography.Text disabled inline className={styles.schedule}>
              {address.work_time}
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
