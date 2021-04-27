import { YMaps, Map as YMap } from 'react-yandex-maps'
import { BxNavigation } from '@/icons'
import { PATH } from '@/config'
import CheckoutHeader from '@/views/common/CheckoutHeader'
import styles from './map.module.scss'
import Panel from './Panel'
import Scale from './Scale'

const Map = () => {
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
            defaultState={{ center: [55.75, 37.57], zoom: 9 }}
            height="100%"
            width="100%"
          />
        </YMaps>
        <Scale />
        <Panel />
      </div>
    </div>
  )
}

export default Map
