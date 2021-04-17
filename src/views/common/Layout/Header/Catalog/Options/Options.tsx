import { Menu } from '@/components'
import { Catalog } from '@/interfaces'
import { Dispatch } from 'react'

interface Props {
  catalogs?: Catalog[]
  selected?: string
  setSelected: Dispatch<string>
}

const Options = (props: Props) => {
  const { catalogs, selected, setSelected } = props

  return (
    <Menu value={selected} onSelect={setSelected}>
      {catalogs?.map((catalog) => (
        <Menu.Item key={catalog.id} disabled={!catalog.catalogs.length}>
          {catalog.name}
        </Menu.Item>
      ))}
    </Menu>
  )
}

export default Options
