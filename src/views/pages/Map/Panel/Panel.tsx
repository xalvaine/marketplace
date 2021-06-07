import { Button, Typography } from '@/components'
import { BxNavigation, BxX } from '@/icons'
import { DeliveryPoint } from '@/interfaces'
import { Dispatch, useState } from 'react'
import { useMediaQuery } from '@/utils'
import { usePostUserAddress } from '@/hooks'
import { PATH } from '@/config'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { RootState } from '@/pages/_app'
import styles from './panel.module.scss'

interface Props {
  point?: DeliveryPoint
  setPoint?: Dispatch<DeliveryPoint | undefined>
}

const Panel = (props: Props) => {
  const { point, setPoint } = props
  const { matches } = useMediaQuery(`(min-width: 1024px)`)
  const [extended, setExtended] = useState(false)
  const { mutateAsync: postUserAddress } = usePostUserAddress()
  const city = useSelector((state: RootState) => state.checkout.city)
  const router = useRouter()

  const handleSubmit = async () => {
    if (!point) return
    await postUserAddress({
      address: point.address,
      is_primary: true,
      type: `pickpoint`,
      name: point.code,
      work_time: point.workTime,
    })
    await router.push(PATH.CHECKOUT)
  }

  return (
    <div className={styles.wrapper}>
      <Typography.Title className={styles.label} level={4}>
        Самовывоз
      </Typography.Title>
      <Typography.Text className={styles.city}>{city?.value}</Typography.Text>
      {!point && (
        <>
          <Typography.Title className={styles.title} level={6}>
            Выберете пункт <br /> самовывоза на карте
          </Typography.Title>
          <Button
            block
            className={styles.locate}
            icon={BxNavigation}
            size="large"
            type={matches ? `link` : `primary`}
          >
            {matches ? `Определить местоположение` : `Мое местоположение`}
          </Button>
        </>
      )}
      {point && (
        <>
          <header className={styles.mainInfo}>
            <BxX
              className={styles.close}
              onClick={setPoint && (() => setPoint(undefined))}
            />
            <Typography.Text disabled className={styles.name}>
              Постамат
            </Typography.Text>
            <Typography.Title className={styles.id} level={5}>
              {point.code}
            </Typography.Title>
            <Typography.Title className={styles.price} level={5}>
              148₽
            </Typography.Title>
          </header>
          <Typography.Text className={styles.address} weight="semibold">
            {point.address.fullAddress}
          </Typography.Text>
          <Typography.Text className={styles.text}>
            {point.workTime}
          </Typography.Text>
          <Typography.Title className={styles.pcPrice} level={5}>
            148₽
          </Typography.Title>
          {(extended || matches) && (
            <>
              <Typography.Text className={styles.subtitle} weight="bold">
                Как добраться
              </Typography.Text>
              <Typography.Text className={styles.text}>
                {point.description || `Информация отсутствует`}
              </Typography.Text>
              <Typography.Text className={styles.subtitle} weight="bold">
                Дополнительно
              </Typography.Text>
              <Typography.Text className={styles.text}>
                {point.description || `Информация отсутствует`}
              </Typography.Text>
            </>
          )}
          <div className={styles.buttons}>
            <Button
              className={styles.more}
              size="large"
              type="secondary"
              onClick={() => setExtended(!extended)}
            >
              {extended ? `Скрыть` : `Подробнее`}
            </Button>
            <Button
              className={styles.select}
              size="large"
              onClick={handleSubmit}
            >
              Выбрать
            </Button>
          </div>
        </>
      )}
    </div>
  )
}

export default Panel
