import { UrlObject } from 'url'
import { Link, Typography } from '@/components'
import styles from './item.module.scss'

interface Props {
  href?: string | UrlObject
  text: string
}

const Item = (props: Props) => {
  const { href, text } = props

  const render = (
    <Typography.Text secondary className={styles.text} weight="medium">
      {text}
    </Typography.Text>
  )

  return href ? <Link href={href}>{render}</Link> : render
}

export default Item
