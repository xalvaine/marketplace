import { Button, Form, Modal, Radio, Typography } from '@/components'
import { BxEditAlt, BxPlus } from '@/icons'
import { usePatchReceiver } from '@/hooks'
import { useEffect, useState } from 'react'
import Receiver from '@/views/pages/Checkout/ReceiverBlock/Receiver'
import { Receiver as ReceiverType } from '@/interfaces'
import styles from './receivers.module.scss'

interface Props {
  onClose: () => void
  receivers?: ReceiverType[]
}

const Receivers = (props: Props) => {
  const { onClose, receivers } = props
  const [visible, setVisible] = useState(false)
  const { mutateAsync: patchReceiver } = usePatchReceiver()

  const form = Form.useForm({
    initialValues: receivers?.find(
      (receiver) => receiver.is_primary,
    ) as ReceiverType,
    onSubmit: async (values) => {
      try {
        await patchReceiver({ ...values, is_primary: true })
        onClose()
      } catch (error) {
        console.error(error)
      }
    },
  })

  useEffect(
    () =>
      void receivers &&
      form.setValues(
        receivers?.find((receiver) => receiver.is_primary) as ReceiverType,
      ),
  )

  return (
    <>
      <div className={styles.content}>
        <Radio.Group className={styles.group} name="address">
          {receivers?.map((receiver, index) => (
            <Radio
              key={index}
              className={styles.radio}
              defaultChecked={receiver.is_primary}
              icon={BxEditAlt}
              label={receiver.full_name}
              onChange={(event) =>
                event.target.checked && form.setValues(receiver)
              }
            >
              <Typography.Text inline>{receiver.phone}</Typography.Text>
            </Radio>
          ))}
        </Radio.Group>
        <Button
          block
          className={styles.add}
          icon={BxPlus}
          type="link"
          onClick={() => setVisible(true)}
        >
          Добавить получателя
        </Button>
        <Button
          block
          className={styles.choose}
          size="large"
          onClick={form.submitForm}
        >
          Выбрать
        </Button>
      </div>
      <Modal
        title="Получатель"
        visible={visible}
        onClose={() => setVisible(false)}
      >
        <Receiver onClose={() => setVisible(false)} />
      </Modal>
    </>
  )
}

export default Receivers
