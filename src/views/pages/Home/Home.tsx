import styles from './home.module.scss'
import Carousel from './Carousel'

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <Carousel />
    </div>
  )
}

export default Home
