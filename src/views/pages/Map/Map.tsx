import { YMaps, Map as YMap, ObjectManager } from 'react-yandex-maps'
import { BxNavigation, BxArrowBack } from '@/icons'
import { PATH } from '@/config'
import { DeliveryPoint } from '@/interfaces'
import CheckoutHeader from '@/views/common/CheckoutHeader'
import { useDeliveryPoints } from '@/hooks/useDeliveryPoints'
import { useMemo, useState } from 'react'
import { useMediaQuery } from '@/utils'
import styles from './map.module.scss'
import Panel from './Panel'
import Scale from './Scale'
import Logo from '@/views/common/Layout/Header/assets/logo-small.svg'
import { Button, Link } from '@/components'

const Map = () => {
  const { data: externalPoints } = useDeliveryPoints({})
  const [zoom, setZoom] = useState(10)
  const [point, setPoint] = useState<DeliveryPoint>()
  const { matches } = useMediaQuery(`(min-width: 1024px)`)

  const points = useMemo(
    () =>
      externalPoints?.map(({ code, latitude, longitude, ...rest }) => ({
        ...rest,
        id: code,
        type: 'Feature' as const,
        geometry: {
          type: 'Point',
          coordinates: [parseFloat(latitude), parseFloat(longitude)],
        },
      })),
    [externalPoints],
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
            defaultState={{ center: [55.75, 37.57], zoom: 10 }}
            height="100%"
            width="100%"
          >
            {points && (
              <ObjectManager
                features={points}
                instanceRef={(ref: any) => {
                  const listener = (event: { get: (arg0: string) => any }) => {
                    const objectId = event.get(`objectId`)
                    setPoint(ref?.objects?.getById(objectId))
                  }
                  if (!ref?.objects?.events?.types?.click?.length) {
                    ref?.objects?.events.add(`click`, listener)
                  }
                }}
                objects={{ openBalloonOnClick: true }}
                options={{
                  clusterize: true,
                  gridSize: 128,
                }}
              />
            )}
          </YMap>
        </YMaps>
        <Scale setZoom={setZoom} zoom={zoom} />
        <Panel point={point} setPoint={setPoint} />
      </div>
    </div>
  )
}

export default Map
