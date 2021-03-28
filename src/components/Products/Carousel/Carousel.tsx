import { Slider } from '@/components/common'
const src = `https://images.unsplash.com/photo-1587471384749-6d25c9944c5a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80`

const Carousel = () => {
  return (
    <Slider>
      <Slider.Slide image={src} />
      <Slider.Slide image={src} />
      <Slider.Slide image={src} />
    </Slider>
  )
}

export default Carousel
