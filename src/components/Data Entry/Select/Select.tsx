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
  value?: string | number
}

const Select = (props: Props) => {
  const { children, onSelect, onChange, placeholder, value, ...rest } = props
  const [open, setOpen] = useState(false)
  const [focused, setFocused] = useState(false)
  const [searchValue, setSearchValue] = useState(``)
  const optionsRef = useRef<HTMLInputElement>(null)

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

  const handleSelect = (value: any) => {
    setOpen(false)
    if (onSelect) {
      onSelect(value)
    }
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
      <Options
        open={open}
        options={options}
        optionsRef={optionsRef}
        setOpen={setOpen}
        onSelect={handleSelect}
      />
    </>
  )
}

Select.Option = Option as FunctionComponent<ExternalProps>
export default Select
