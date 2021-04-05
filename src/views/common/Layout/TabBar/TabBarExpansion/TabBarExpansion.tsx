import { ReactNode, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import styles from './tab-bar-expansion.module.scss'

interface Props {
  children: ReactNode
  visible: boolean
}

const TabBarExpansion = (props: Props) => {
  const { children, visible } = props
  const [tabBar, setTabBar] = useState<HTMLElement | null>(null)

  useEffect(() => {
    setTabBar(document.getElementById(`tab-bar-extension-root`))
  }, [])

  return (
    tabBar &&
    createPortal(
      <CSSTransition
        timeout={600}
        mountOnEnter
        unmountOnExit
        in={visible}
        classNames={{
          enter: styles.enter,
          enterActive: styles.enterActive,
          exit: styles.exit,
          exitActive: styles.exitActive,
        }}
      >
        <div>{children}</div>
      </CSSTransition>,
      tabBar,
    )
  )
}

export default TabBarExpansion
