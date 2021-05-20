import { createPortal } from 'react-dom'
import { RefObject, useCallback, useEffect, useState } from 'react'
import Option, { ExternalProps } from '../Option'
import styles from './options.module.scss'

interface Props {
  open: boolean
  onClose: () => void
  onSelect?: (value: any) => void
  options?: ExternalProps[]
  optionsRef: RefObject<HTMLInputElement>
}

const Options = (props: Props) => {
  const { open, onClose, onSelect, options, optionsRef } = props

  const [optionsWrapper, setOptionsWrapper] = useState<HTMLElement | null>(null)
  const [optionsPosition, setOptionsPosition] = useState({
    top: 0,
    left: 0,
    width: 0,
  })

  const handlePlaceOptions = useCallback(() => {
    if (optionsRef.current) {
      const rect = optionsRef.current.getBoundingClientRect()
      setOptionsPosition({
        left: rect.x,
        top: rect.y + rect.height,
        width: rect.width,
      })
    }
  }, [optionsRef])

  useEffect(
    () => setOptionsWrapper(document.getElementById(`select-options`)),
    [],
  )
  useEffect(
    () => void (open && handlePlaceOptions()),
    [handlePlaceOptions, open],
  )

  if (!optionsWrapper) return null
  return createPortal(
    open && (
      <>
        <span className={styles.shadow} onClick={onClose} />
        <div className={styles.options} style={optionsPosition}>
          {options?.map(({ key, ...props }) => (
            <Option
              {...props}
              key={key as string}
              onClick={(value) => onSelect && onSelect(value as never)}
            >
              {props.children}
            </Option>
          ))}
        </div>
      </>
    ),
    optionsWrapper,
  )
}

export default Options
