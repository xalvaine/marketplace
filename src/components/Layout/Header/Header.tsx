import Logo from './assets/logo-small.svg'
import styles from './header.module.scss'
import { BxBell, BxUserCircle } from '@/icons'
import Badge from '@/components/common/Badge'

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <Badge dot count={1} color="#1890ff">
        <BxBell className={styles.icon} />
        <p />
      </Badge>
      <Logo />
      <BxUserCircle className={styles.icon} />
    </header>
  )
}

export default Header
