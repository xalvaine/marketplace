import { BxBell, BxUserCircle } from '@/icons'
import { Badge } from '@/components'
import Logo from './assets/logo-small.svg'
import styles from './header.module.scss'

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <Badge dot color="#1890ff" count={1}>
        <BxBell className={styles.icon} />
        <p />
      </Badge>
      <Logo />
      <BxUserCircle className={styles.icon} />
    </header>
  )
}

export default Header
