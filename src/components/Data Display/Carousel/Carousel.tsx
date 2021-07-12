import { Children, ComponentProps, ReactElement, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperClass from 'swiper/types/swiper-class'
import classNames from 'classnames'

import Slide from './Slide'
import Pages from './Pages'
import Chevrons from './Chevrons'
import styles from './slider.module.scss'

interface Props extends Swiper {
  className?: string
  controls?: boolean
  children:
    | ReactElement<ComponentProps<typeof Slide>>
    | ReactElement<ComponentProps<typeof Slide>>[]
}

const Carousel = (props: Props) => {
  const {
    children,
    className,
    spaceBetween = 8,
    loop = true,
    controls,
    onSwiper,
    ...rest
  } = props
  const [page, setPage] = useState(0)
  const [slider, setSlider] = useState<SwiperClass>()

  const slides = Children.map(children, ({ props }) => props)
  const pagesCount = slides.length

  const handlePageSwitch = (delta: number) => {
    if (delta > 0) slider?.slideNext()
    if (delta < 0) slider?.slidePrev()
  }

  const handleSwiper = (swiper: SwiperClass) => {
    setSlider(swiper)
    if (onSwiper) {
      onSwiper(swiper)
    }
  }

  return (
    <Swiper
      {...rest}
      allowSlideNext={pagesCount > 1}
      allowSlidePrev={pagesCount > 1}
      className={classNames(styles.slider, className)}
      loop={loop}
      spaceBetween={spaceBetween}
      onSlideChange={(event) => setPage(event.realIndex)}
      onSwiper={handleSwiper}
    >
      {slides.map((props, index) => (
        <SwiperSlide key={index}>
          <img
            alt=""
            className={classNames(
              styles.image,
              pagesCount > 1 && styles.grab,
              props.className,
            )}
            src={props.image}
          />
        </SwiperSlide>
      ))}
      {pagesCount > 1 && props.direction === `horizontal` && (
        <>
          <Pages current={page} total={pagesCount} />
          {controls && <Chevrons handlePageSwitch={handlePageSwitch} />}
        </>
      )}
    </Swiper>
  )
}

Carousel.Slide = Slide
export default Carousel
