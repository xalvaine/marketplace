import { Input } from '@/components'
import { BxSearch } from '@/icons'

import styles from './home.module.scss'
import Carousel from './Carousel'

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <Input
        leftIcon={BxSearch}
        className={styles.input}
        size="large"
        placeholder="Поиск по товарам"
      />
      <Carousel />
    </div>
  )
}

export default Home
