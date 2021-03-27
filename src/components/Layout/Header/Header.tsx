import Logo from './assets/logo-small.svg'
import styles from './header.module.scss'
import { BxBell } from "@/components/common/General/Icons";

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <BxBell />
      <Logo />
    </header>
  )
}

export default Header
