import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Typography } from '@/components'
import { BxArrowBack, BxX } from '@/icons'
import { layout } from '@/reducers'
import { useDispatch } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import styles from './modal.module.scss'

interface Props {
  title: string
  footer?: ReactNode
  onClose?: () => void
  visible: boolean
  children?: ReactNode
}

const Modal = (props: Props) => {
  const { title, children, visible, footer, onClose } = props
  const [modalWrapper, setModalWrapper] = useState<HTMLElement | null>()
  const dispatch = useDispatch()
  const handleVisibilityChange = useCallback(() => {
    if (!modalWrapper) return
    dispatch(
      layout.setHideBodyOverflow(!!(modalWrapper.childElementCount - +visible)),
    )
  }, [dispatch, modalWrapper, visible])

  useEffect(() => {
    setModalWrapper(document.getElementById(`modals`))
  }, [])

  useEffect(() => handleVisibilityChange, [handleVisibilityChange])

  useEffect(() => {
    const close = (event: KeyboardEvent) =>
      onClose && event.key === `Escape` && onClose()
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [onClose])

  if (!modalWrapper) return null
  return createPortal(
    <CSSTransition
      mountOnEnter
      unmountOnExit
      classNames={{
        enter: styles.transparent,
        enterActive: styles.visible,
        exitActive: styles.transparent,
      }}
      in={visible}
      timeout={300}
    >
      <section className={styles.wrapper}>
        <div className={styles.overlay}>
          <span className={styles.shadow} onClick={onClose} />
          <div className={styles.inner}>
            <header className={styles.header}>
              <BxArrowBack className={styles.mobileIcon} onClick={onClose} />
              <Typography.Title className={styles.title} level={5}>
                {title}
              </Typography.Title>
              <BxX className={styles.pcIcon} onClick={onClose} />
            </header>
            <main className={styles.main}>{children}</main>
            {footer && <footer>{footer}</footer>}
          </div>
        </div>
      </section>
    </CSSTransition>,
    modalWrapper,
  )
}

export default Modal
