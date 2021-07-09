import { Checkbox, Typography } from '@/components'
import styles from './checkboxes.module.scss'

const Checkboxes = () => {
  return (
    <div className={styles.wrapper}>
      <Typography.Title className={styles.title} level={6}>
        Бренды
      </Typography.Title>
      <Checkbox>Шурмишур</Checkbox>
      <Checkbox>CHOCO STORY</Checkbox>
      <Checkbox>Яшкино</Checkbox>
      <Checkbox>Мармелад Шоу</Checkbox>
      <Checkbox>Fini</Checkbox>
      <Typography.Text className={styles.more} weight="medium">
        Показать все
      </Typography.Text>
    </div>
  )
}

export default Checkboxes
