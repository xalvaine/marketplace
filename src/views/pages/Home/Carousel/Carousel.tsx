import { Slider } from '@/components'
import { mockSrc } from '@/config'

import styles from './carousel.module.scss'

const Carousel = () => {
  return (
    <Slider loop className={styles.slider}>
      <Slider.Slide image={mockSrc} />
      <Slider.Slide image={mockSrc} />
      <Slider.Slide image={mockSrc} />
    </Slider>
  )
}

export default Carousel
