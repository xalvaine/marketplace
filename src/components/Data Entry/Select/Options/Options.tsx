import { createPortal } from 'react-dom'
import React, {
  RefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { Transition } from 'react-transition-group'
import classNames from 'classnames'
import Option, { ExternalProps } from '../Option'
import styles from './options.module.scss'

interface Props {
  open: boolean
  onClose: () => void
  onSelect?: (value: any) => void
  options?: ExternalProps[]
  optionsRef: RefObject<HTMLInputElement>
  value?: string | number
}

const activeStates = [`entering`, `entered`]
const exitedStates = [`exited`]

const Options = (props: Props) => {
  const { open, onClose, onSelect, options, optionsRef, value } = props

  const [height, setHeight] = useState<number>()
  const contentRef = useRef<HTMLDivElement>(null)
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

  const layout = useMemo(
    () =>
      options?.map(({ key, ...props }) => (
        <Option
          {...props}
          key={key as string}
          active={props.value === value}
          onClick={(value) => onSelect && onSelect(value as never)}
        >
          {props.children}
        </Option>
      )),
    [onSelect, options],
  )

  useEffect(() => {
    if (layout && contentRef.current) {
      setHeight(contentRef.current.scrollHeight + 2)
    }
  }, [layout])

  if (!optionsWrapper) return null
  return createPortal(
    <Transition
      mountOnEnter
      unmountOnExit
      in={open && !!options?.length}
      timeout={300}
    >
      {(state) => (
        <>
          {console.log(state)}
          <span className={styles.shadow} onClick={onClose} />
          <div
            ref={contentRef}
            className={classNames(styles.options, styles[state])}
            style={{
              ...optionsPosition,
              height:
                height &&
                ((activeStates.includes(state) && height) ||
                  (exitedStates.includes(state) && height * 0.4) ||
                  0),
            }}
          >
            {layout}
          </div>
        </>
      )}
    </Transition>,
    optionsWrapper,
  )
}

export default Options
