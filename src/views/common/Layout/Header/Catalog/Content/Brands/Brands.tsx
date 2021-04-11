import { mockSrc } from '@/config'
import styles from './brands.module.scss'

const Brands = () => {
  return (
    <div className={styles.wrapper}>
      <img alt="" className={styles.image} src={mockSrc} />
      <img alt="" className={styles.image} src={mockSrc} />
    </div>
  )
}

export default Brands
