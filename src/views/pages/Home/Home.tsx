import { Input } from '@/components'
import { BxSearch } from '@/icons'
import styles from './home.module.scss'
import Carousel from './Carousel'

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <Input
        className={styles.input}
        leftIcon={BxSearch}
        placeholder="Поиск по товарам"
        size="large"
      />
      <Carousel />
    </div>
  )
}

export default Home
