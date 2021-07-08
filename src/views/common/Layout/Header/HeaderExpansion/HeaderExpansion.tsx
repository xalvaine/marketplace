import { ReactNode, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

interface Props {
  children: ReactNode
}

const HeaderExpansion = (props: Props) => {
  const { children } = props
  const [content, setContent] = useState<HTMLElement | null>(null)

  useEffect(
    () => setContent(document.getElementById(`header-extension-root`)),
    [],
  )

  return content && createPortal(children, content)
}

export default HeaderExpansion
