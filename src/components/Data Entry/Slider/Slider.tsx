import { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import Dot from './Dot'
import styles from './slider.module.scss'

interface Props {
  step?: number
  range?: boolean
  onChange?: (values: number[]) => void
  className?: string
  value: number[]
}

const Slider = (props: Props) => {
  const { range, onChange, step = 0.01, className, value } = props
  const [constraints, setConstraints] = useState<{ min: number; max: number }>()
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sliderRef.current) return
    setConstraints({
      min: sliderRef.current.offsetLeft,
      max: sliderRef.current.offsetLeft + sliderRef.current.offsetWidth,
    })
  }, [])

  return (
    <div className={classNames(styles.wrapper, className)}>
      <div ref={sliderRef} className={styles.container}>
        <span
          className={styles.range}
          style={{
            left: `${range ? Math.min(...value) : 0}%`,
            right: `${100 - Math.max(...value)}%`,
          }}
        />
        {range && (
          <Dot
            max={constraints?.max}
            min={constraints?.min}
            percentage={value[0]}
            setPercentage={(percentage) =>
              onChange && onChange([percentage, value[1]])
            }
            step={step}
          />
        )}
        <Dot
          max={constraints?.max}
          min={constraints?.min}
          percentage={range ? value[1] : value[0]}
          setPercentage={(percentage) =>
            onChange && onChange(range ? [value[0], percentage] : [percentage])
          }
          step={step}
        />
      </div>
    </div>
  )
}

export default Slider
