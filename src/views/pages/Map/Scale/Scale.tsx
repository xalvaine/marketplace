import { BxMinus, BxPlus } from '@/icons'
import { Dispatch } from 'react'
import styles from './scale.module.scss'

interface Props {
  zoom: number
  setZoom: Dispatch<number>
}

const Scale = (props: Props) => {
  const { zoom, setZoom } = props

  return (
    <ul className={styles.wrapper}>
      <li className={styles.button}>
        <BxPlus
          className={styles.icon}
          onClick={() => setZoom(Math.min(zoom + 1, 23))}
        />
      </li>
      <li className={styles.button}>
        <BxMinus
          className={styles.icon}
          onClick={() => setZoom(Math.max(zoom - 1, 1))}
        />
      </li>
    </ul>
  )
}

export default Scale
