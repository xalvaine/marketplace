import { Switch, Typography } from '@/components'
import styles from './switches.module.scss'

const Switches = () => {
  return (
    <ul className={styles.wrapper}>
      <li className={styles.switch}>
        <Typography.Title level={6}>Бестселлеры</Typography.Title>
        <Switch size="small" />
      </li>
      <li className={styles.switch}>
        <Typography.Title level={6}>Высокий рейтинг </Typography.Title>
        <Switch size="small" />
      </li>
    </ul>
  )
}

export default Switches
