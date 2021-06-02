import React, { ReactNode, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Transition } from 'react-transition-group'
import styles from './tab-bar-expansion.module.scss'

interface Props {
  children: ReactNode
  visible: boolean
}

const activeStates = [`entering`, `entered`]

const TabBarExpansion = (props: Props) => {
  const { children, visible } = props
  const [tabBar, setTabBar] = useState<HTMLElement | null>(null)
  const [height, setHeight] = useState<number>()
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(
    () => setTabBar(document.getElementById(`tab-bar-extension-root`)),
    [],
  )

  useEffect(() => {
    if (children) {
      setHeight(contentRef.current?.scrollHeight)
    }
  }, [children])

  return (
    tabBar &&
    createPortal(
      <Transition mountOnEnter unmountOnExit in={visible} timeout={600}>
        {(state) => (
          <div
            ref={contentRef}
            className={styles[state]}
            style={{ height: activeStates.includes(state) ? height : 0 }}
          >
            {children}
          </div>
        )}
      </Transition>,
      tabBar,
    )
  )
}

export default TabBarExpansion
