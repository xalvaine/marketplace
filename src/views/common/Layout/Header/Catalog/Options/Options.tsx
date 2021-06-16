import { Menu } from '@/components'
import { Category } from '@/interfaces'
import { Dispatch } from 'react'

interface Props {
  categories?: Category<Category<Category>>[]
  selected?: string
  setSelected: Dispatch<string>
}

const Options = (props: Props) => {
  const { categories, selected, setSelected } = props

  return (
    <Menu value={selected} onSelect={setSelected}>
      {categories?.map((category) => (
        <Menu.Item key={category.id} disabled={!category.categories.length}>
          {category.name}
        </Menu.Item>
      ))}
    </Menu>
  )
}

export default Options
