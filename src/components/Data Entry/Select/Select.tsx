import { Input } from '@/components'
import {
  ChangeEvent,
  Children,
  ComponentProps,
  FunctionComponent,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from 'react'
import { createPortal } from 'react-dom'
import Option, { ExternalProps } from './Option'
import styles from './select.module.scss'

type Props = Omit<ComponentProps<typeof Input>, 'onSelect' | 'children'> & {
  children?: ReactElement<ExternalProps> | ReactElement<ExternalProps>[]
} & (
    | { onSelect?: (value: string) => void; value?: string }
    | { onSelect?: (value: number) => void; value?: number }
  )

const Select = (props: Props) => {
  const { children, onSelect, onChange, placeholder, value, ...rest } = props
  const [open, setOpen] = useState(false)
  const [optionsWrapper, setOptionsWrapper] = useState<HTMLElement | null>(null)
  const [focused, setFocused] = useState(false)
  const [searchValue, setSearchValue] = useState(``)
  const [optionsPosition, setOptionsPosition] = useState({
    top: 0,
    left: 0,
    width: 0,
  })
  const optionsRef = useRef<HTMLInputElement>(null)

  const handlePlaceOptions = () => {
    if (optionsRef.current) {
      const rect = optionsRef.current.getBoundingClientRect()
      setOptionsPosition({
        left: rect.x,
        top: rect.y + rect.height,
        width: rect.width,
      })
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
    if (onChange) {
      onChange(event)
    }
  }

  const handleBlur = () => {
    setFocused(false)
    setSearchValue(``)
  }

  useEffect(() => setOptionsWrapper(document.getElementById(`options`)), [])
  useEffect(() => void (open && handlePlaceOptions()), [open])

  const options =
    children &&
    Children.map(children, ({ props, key }) => ({
      ...props,
      key,
    }))

  const displayedValue: string | undefined = options
    ?.find((option) => option.value === value)
    ?.children?.toString()

  return (
    <>
      <Input
        {...rest}
        ref={optionsRef}
        placeholder={
          focused
            ? displayedValue || value?.toString() || placeholder
            : placeholder
        }
        readOnly={!onChange}
        value={focused ? searchValue : displayedValue || ``}
        onBlur={handleBlur}
        onChange={handleChange}
        onClick={() => setOpen(true)}
        onFocus={() => setFocused(true)}
      />
      {optionsWrapper &&
        createPortal(
          open && (
            <>
              <span className={styles.shadow} onClick={() => setOpen(false)} />
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
        )}
    </>
  )
}

Select.Option = Option as FunctionComponent<ExternalProps>
export default Select
