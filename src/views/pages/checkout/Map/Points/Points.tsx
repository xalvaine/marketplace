import { Dispatch, useMemo } from 'react'
import { Clusterer, Placemark } from 'react-yandex-maps'
import Icon from '@/views/pages/checkout/Map/assets/icon.svg'
import { useDeliveryPoints } from '@/hooks/checkout/useDeliveryPoints'
import { useSelector } from 'react-redux'
import { RootState } from '@/pages/_app'
import { DeliveryPoint } from '@/interfaces'

interface Props {
  setPoint: Dispatch<DeliveryPoint>
}

const Points = (props: Props) => {
  const { setPoint } = props
  const city = useSelector((state: RootState) => state.checkout.city)
  const { data: points } = useDeliveryPoints(city?.data)

  return useMemo(
    () => (
      <Clusterer options={{ gridSize: 128 }}>
        {points?.map((point) => (
          <Placemark
            key={point.code}
            geometry={[parseFloat(point.latitude), parseFloat(point.longitude)]}
            options={{
              iconLayout: `default#imageWithContent`,
              iconImageHref: `${Icon}`,
              state: { hover: true },
            }}
            properties={{ iconContent: `132₽` }}
            onClick={() => setPoint(point)}
          />
        ))}
      </Clusterer>
    ),
    [points, setPoint],
  )
}

export default Points
