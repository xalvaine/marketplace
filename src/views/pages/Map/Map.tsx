import {
  YMaps,
  Map as YMap,
  Clusterer,
  Placemark,
  ZoomControl,
} from 'react-yandex-maps'
import { BxNavigation, BxArrowBack } from '@/icons'
import { PATH } from '@/config'
import { DeliveryPoint } from '@/interfaces'
import CheckoutHeader from '@/views/common/CheckoutHeader'
import { useDeliveryPoints } from '@/hooks/useDeliveryPoints'
import { useMemo, useState } from 'react'
import { useMediaQuery } from '@/utils'
import { ReactComponent as Logo } from '@/views/common/Layout/Header/assets/logo-small.svg'
import { Button, Link } from '@/components'
import { useSelector } from 'react-redux'
import { RootState } from '@/pages/_app'
import styles from './map.module.scss'
import Panel from './Panel'
import Icon from './assets/icon.svg'

const Map = () => {
  const [point, setPoint] = useState<DeliveryPoint>()
  const { matches } = useMediaQuery(`(min-width: 1024px)`)
  const city = useSelector((state: RootState) => state.checkout.city)
  const { data: points } = useDeliveryPoints(city?.data)

  const content = useMemo(
    () => (
      <Clusterer gridSize={128}>
        {points?.map((point) => (
          <Placemark
            key={point.code}
            geometry={[parseFloat(point.latitude), parseFloat(point.longitude)]}
            options={{
              iconLayout: `default#imageWithContent`,
              iconImageHref: `${Icon}`,
            }}
            properties={{ iconContent: `132₽` }}
            onClick={() => setPoint(point)}
          />
        ))}
      </Clusterer>
    ),
    [points],
  )

  return (
    <div className={styles.wrapper}>
      <header className={styles.simpleHeader}>
        <Link className={styles.back} href={PATH.TARIFFS}>
          <Button icon={BxArrowBack} type="link">
            Назад
          </Button>
        </Link>
        <Logo className={styles.logo} />
      </header>
      {!matches && (
        <CheckoutHeader
          bordered
          backLink={PATH.TARIFFS}
          rightIcon={BxNavigation}
          subtitle="Казань"
          title="Самовывоз"
        />
      )}
      <div className={styles.content}>
        <YMaps>
          <YMap
            defaultState={{ center: [55.75, 37.57], zoom: 10, controls: [] }}
            height="100%"
            modules={[`layout.ImageWithContent`]}
            width="100%"
          >
            {content}
            <ZoomControl
              options={{
                position: {
                  top: matches ? 108 : 48,
                  right: 16,
                  bottom: `auto`,
                  left: `auto`,
                },
              }}
            />
          </YMap>
        </YMaps>
        <Panel point={point} setPoint={setPoint} />
      </div>
    </div>
  )
}

export default Map
