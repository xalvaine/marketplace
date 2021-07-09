import { Dispatch } from 'react'
import styles from './dot.module.scss'

interface Props {
  percentage: number
  setPercentage: Dispatch<number>
  min?: number
  max?: number
  step: number
}

type EventType = 'mouse' | 'touch'

const countPercentage = (
  coordsX: number,
  step: number,
  min: number,
  max: number,
) => {
  return Math.min(
    Math.max(
      Math.round(((coordsX - min) * 100) / (max - min) / step) * step,
      0,
    ),
    100,
  )
}

const Dot = (props: Props) => {
  const { percentage, setPercentage, min, max, step } = props

  const handleDown = (eventType: EventType) => () => {
    if (eventType === `mouse`) {
      window.addEventListener(`mousemove`, handleMouseMove)
      window.addEventListener(`mouseup`, handleMouseUp)
    } else {
      window.addEventListener(`touchmove`, handleTouchMove)
      window.addEventListener(`touchend`, handleTouchUp)
    }
  }

  const handleMouseMove = (event: MouseEvent) => {
    if (!min || !max) return
    setPercentage(countPercentage(event.pageX, step, min, max))
  }

  const handleTouchMove = (event: TouchEvent) => {
    if (!min || !max) return
    setPercentage(countPercentage(event.touches[0].pageX, step, min, max))
  }

  const handleMouseUp = () => {
    window.removeEventListener(`mousemove`, handleMouseMove)
    window.removeEventListener(`mouseup`, handleMouseUp)
  }

  const handleTouchUp = () => {
    window.removeEventListener(`touchmove`, handleTouchMove)
    window.removeEventListener(`touchend`, handleTouchUp)
  }

  return (
    <span
      className={styles.dot}
      style={{ left: `${percentage}%` }}
      onMouseDown={handleDown(`mouse`)}
      onTouchStart={handleDown(`touch`)}
    />
  )
}

export default Dot
