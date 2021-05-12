import { YMaps, Map as YMap, ObjectManager } from 'react-yandex-maps'
import { BxNavigation } from '@/icons'
import { PATH } from '@/config'
import CheckoutHeader from '@/views/common/CheckoutHeader'
import { useDeliveryPoints } from '@/hooks/useDeliveryPoints'
import { useMemo } from 'react'
import styles from './map.module.scss'
import Panel from './Panel'
import Scale from './Scale'

const Map = () => {
  const { data: externalPoints } = useDeliveryPoints({})

  const points = useMemo(
    () =>
      externalPoints?.map((point) => ({
        id: point.code,
        type: 'Feature' as const,
        geometry: {
          type: 'Point',
          coordinates: [
            parseFloat(point.latitude),
            parseFloat(point.longitude),
          ],
        },
      })),
    [externalPoints],
  )

  return (
    <div className={styles.wrapper}>
      <CheckoutHeader
        bordered
        backLink={PATH.TARIFFS}
        rightIcon={BxNavigation}
        subtitle="Казань"
        title="Самовывоз"
      />
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
                objects={{ openBalloonOnClick: true }}
                options={{
                  clusterize: true,
                  gridSize: 128,
                }}
              />
            )}
          </YMap>
        </YMaps>
        <Scale />
        <Panel />
      </div>
    </div>
  )
}

export default Map
