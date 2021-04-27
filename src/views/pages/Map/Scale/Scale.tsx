import { BxMinus, BxPlus } from '@/icons'
import styles from './scale.module.scss'

const Scale = () => {
  return (
    <ul className={styles.wrapper}>
      <li className={styles.button}>
        <BxPlus className={styles.icon} />
      </li>
      <li className={styles.button}>
        <BxMinus className={styles.icon} />
      </li>
    </ul>
  )
}

export default Scale
