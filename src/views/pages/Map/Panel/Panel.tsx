import { Button, Typography } from '@/components'
import { BxNavigation } from '@/icons'
import styles from './panel.module.scss'

const Panel = () => {
  return (
    <div className={styles.wrapper}>
      <Typography.Title className={styles.title} level={6}>
        Выберете пункт <br /> самовывоза на карте
      </Typography.Title>
      <Button block icon={BxNavigation} size="large">
        Мое местоположение
      </Button>
    </div>
  )
}

export default Panel
