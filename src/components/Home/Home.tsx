import { useProducts } from '@/hooks'
import { Input } from '@/components/common'
import { BxSearch } from '@/icons'

import styles from './home.module.scss'
import Carousel from './Carousel'
import Items from './Items'

const Home = () => {
  const { data: products } = useProducts()

  return (
    <>
      <Input
        leftIcon={BxSearch}
        className={styles.input}
        size="large"
        placeholder="Поиск по товарам"
      />
      <Carousel />
      <Items products={products} />
    </>
  )
}

export default Home
