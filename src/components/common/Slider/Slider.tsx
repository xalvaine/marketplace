import { Children, ComponentProps, ReactElement, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import Slide from './Slide'
import styles from './slider.module.scss'
import Pages from './Pages'

interface Props extends Swiper {
  children:
    | ReactElement<ComponentProps<typeof Slide>>
    | ReactElement<ComponentProps<typeof Slide>>[]
}

const Slider = (props: Props) => {
  const { children } = props
  const [page, setPage] = useState(0)

  const slides = Children.map(children, ({ props }) => props)

  return (
    <Swiper
      loop
      className={styles.slider}
      spaceBetween={12}
      onSlideChange={(event) => setPage(event.realIndex)}
    >
      {slides.map((props, index) => (
        <SwiperSlide key={index}>
          <img alt="" className={styles.image} src={props.image} />
        </SwiperSlide>
      ))}
      <Pages total={slides.length} current={page} />
    </Swiper>
  )
}

Slider.Slide = Slide
export default Slider
