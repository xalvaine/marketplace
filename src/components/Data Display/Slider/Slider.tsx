import { Children, ComponentProps, ReactElement, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperClass from 'swiper/types/swiper-class'
import classNames from 'classnames'

import Slide from './Slide'
import styles from './slider.module.scss'
import Pages from './Pages'
import Chevrons from './Chevrons'

interface Props extends Swiper {
  className?: string
  controls?: boolean
  children:
    | ReactElement<ComponentProps<typeof Slide>>
    | ReactElement<ComponentProps<typeof Slide>>[]
}

const Slider = (props: Props) => {
  const { children, className, controls, ...rest } = props
  const [page, setPage] = useState(0)
  const [slider, setSlider] = useState<SwiperClass>()

  const slides = Children.map(children, ({ props }) => props)
  const pagesCount = slides.length

  const handlePageSwitch = (delta: number) => {
    if (delta > 0) slider?.slideNext()
    if (delta < 0) slider?.slidePrev()
  }

  return (
    <Swiper
      {...rest}
      loop
      allowSlideNext={pagesCount > 1}
      allowSlidePrev={pagesCount > 1}
      className={classNames(styles.slider, className)}
      spaceBetween={8}
      onSlideChange={(event) => setPage(event.realIndex)}
      onSwiper={setSlider}
    >
      {slides.map((props, index) => (
        <SwiperSlide key={index}>
          <img
            alt=""
            className={classNames(styles.image, props.className)}
            src={props.image}
          />
        </SwiperSlide>
      ))}
      {pagesCount > 1 && (
        <>
          <Pages current={page} total={pagesCount} />
          {controls && <Chevrons handlePageSwitch={handlePageSwitch} />}
        </>
      )}
    </Swiper>
  )
}

Slider.Slide = Slide
export default Slider
