import { Carousel } from '@/components'
import { mockSrc } from '@/config'
import { useMediaQuery } from '@/utils'
import styles from './carousel.module.scss'

const CarouselView = () => {
  const { matches } = useMediaQuery(`(min-width: 1024px)`)
  return (
    <Carousel className={styles.slider} controls={matches}>
      <Carousel.Slide image={mockSrc} />
      <Carousel.Slide image={mockSrc} />
      <Carousel.Slide image={mockSrc} />
      <Carousel.Slide image={mockSrc} />
    </Carousel>
  )
}

export default CarouselView
