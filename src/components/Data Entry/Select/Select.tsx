import { Input } from '@/components'
import {
  ChangeEvent,
  Children,
  ComponentProps,
  FunctionComponent,
  ReactElement,
  useRef,
  useState,
} from 'react'
import Option, { ExternalProps } from './Option'
import Options from './Options'

type Props = Omit<ComponentProps<typeof Input>, 'onSelect' | 'children'> & {
  children?: ReactElement<ExternalProps> | ReactElement<ExternalProps>[]
  onSelect?: (value: any) => void
  onClose?: () => void
  value?: string | number
}

const Select = (props: Props) => {
  const { children, onSelect, onChange, placeholder, value, onClose, ...rest } =
    props
  const [open, setOpen] = useState(false)
  const [searchValue, setSearchValue] = useState(``)
  const optionsRef = useRef<HTMLInputElement>(null)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
    if (onChange) onChange(event)
  }

  const handleClose = () => {
    setOpen(false)
    setSearchValue(``)
    if (onClose) onClose()
  }

  const handleSelect = (value: any) => {
    if (onSelect) onSelect(value)
    handleClose()
  }

  const handleFocus = () => {
    setOpen(true)
  }

  const options =
    children &&
    Children.map(children, ({ props, key }) => ({
      ...props,
      key: key as string,
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
          open
            ? displayedValue || value?.toString() || placeholder
            : placeholder
        }
        readOnly={!onChange}
        style={{ zIndex: 2 }}
        value={open ? searchValue : displayedValue || ``}
        onChange={handleChange}
        onFocus={handleFocus}
      />
      <Options
        open={open}
        options={options}
        optionsRef={optionsRef}
        value={value}
        onClose={handleClose}
        onSelect={handleSelect}
      />
    </>
  )
}

Select.Option = Option as FunctionComponent<ExternalProps>
export default Select
