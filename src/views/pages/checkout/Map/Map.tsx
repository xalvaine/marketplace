import { YMaps, Map as YMap, ZoomControl } from 'react-yandex-maps'
import { BxNavigation, BxArrowBack } from '@/icons'
import { PATH } from '@/config'
import { DeliveryPoint } from '@/interfaces'
import CheckoutHeader from '@/views/common/CheckoutHeader'
import { useState } from 'react'
import { useMediaQuery } from '@/utils'
import { ReactComponent as Logo } from '@/views/common/Layout/Header/assets/logo-small.svg'
import { Button, Link } from '@/components'
import { useSelector } from 'react-redux'
import { RootState } from '@/pages/_app'
import styles from './map.module.scss'
import Panel from './Panel'
import Points from './Points'

const Map = () => {
  const [point, setPoint] = useState<DeliveryPoint>()
  const { matches } = useMediaQuery(`(min-width: 1024px)`)
  const city = useSelector((state: RootState) => state.checkout.city)

  if (!city) return null
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
            height="100%"
            modules={[`layout.ImageWithContent`]}
            state={{
              center: [
                point
                  ? parseFloat(point.latitude)
                  : parseFloat(city.data.geo_lat as string),
                point
                  ? parseFloat(point.longitude)
                  : parseFloat(city.data.geo_lon as string),
              ],
              zoom: 10,
            }}
            width="100%"
          >
            <Points setPoint={setPoint} />
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
