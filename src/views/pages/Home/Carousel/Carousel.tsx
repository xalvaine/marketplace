import { Slider } from '@/components'
import { mockSrc } from '@/config'
import { useMediaQuery } from '@/utils'
import styles from './carousel.module.scss'

const Carousel = () => {
  const isDesktop = useMediaQuery(`(min-width: 1024px)`)
  return (
    <Slider className={styles.slider} controls={isDesktop}>
      <Slider.Slide image={mockSrc} />
      <Slider.Slide image={mockSrc} />
      <Slider.Slide image={mockSrc} />
      <Slider.Slide image={mockSrc} />
    </Slider>
  )
}

export default Carousel
