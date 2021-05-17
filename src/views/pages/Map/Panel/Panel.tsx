import { Button, Typography } from '@/components'
import { BxNavigation, BxX } from '@/icons'
import { DeliveryPoint } from '@/interfaces'
import { Dispatch } from 'react'
import { useMediaQuery } from '@/utils'
import styles from './panel.module.scss'

interface Props {
  point?: DeliveryPoint
  setPoint?: Dispatch<DeliveryPoint | undefined>
}

const Panel = (props: Props) => {
  const { point, setPoint } = props
  const { matches } = useMediaQuery(`(min-width: 1024px)`)
  //const [extended, setExtended] = useState(false)

  return (
    <div className={styles.wrapper}>
      <Typography.Title className={styles.label} level={4}>
        Самовывоз
      </Typography.Title>
      <Typography.Text className={styles.city}>Казань</Typography.Text>
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
              {point.id}
            </Typography.Title>
            <Typography.Title className={styles.price} level={5}>
              148₽
            </Typography.Title>
          </header>
          <Typography.Text className={styles.address} weight="semibold">
            {point.address.fullAddress}
          </Typography.Text>
          <Typography.Text>{point.workTime}</Typography.Text>
          <Typography.Title className={styles.pcPrice} level={5}>
            148₽
          </Typography.Title>
          <div className={styles.buttons}>
            <Button className={styles.more} size="large" type="secondary">
              Подробнее
            </Button>
            <Button className={styles.select} size="large">
              Выбрать
            </Button>
          </div>
        </>
      )}
    </div>
  )
}

export default Panel
