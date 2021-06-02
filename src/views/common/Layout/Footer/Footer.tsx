import { Typography } from '@/components'
import Column from './Column'
import { ReactComponent as VK } from './assets/bxl-vk.svg'
import { ReactComponent as Facebook } from './assets/bxl-facebook-circle.svg'
import { ReactComponent as Instagram } from './assets/bxl-instagram-alt.svg'
import styles from './footer.module.scss'

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <ul className={styles.columns}>
          <li className={styles.uniqueColumn}>
            <Typography.Title
              className={styles.title}
              level={6}
              weight="semibold"
            >
              Greenleaf
            </Typography.Title>
            <Typography.Text secondary className={styles.text}>
              Все товары для здорового образа жизни на одной площадке.
            </Typography.Text>
            <Typography.Text secondary className={styles.text}>
              Доставка по всей России
            </Typography.Text>
            <div className={styles.icons}>
              <VK />
              <Facebook />
              <Instagram />
            </div>
            <Typography.Text className={styles.toggleVersion}>
              Версия для ПК
            </Typography.Text>
          </li>
          <Column
            rows={[`Как сделать заказ`, `Доставка`, `Оплата`, `Возвраты`]}
            title="Покупателям"
          />
          <Column
            rows={[
              `Подключение продавца`,
              `Личный кабинет продавца`,
              `Справка для продавцов`,
              `Сайт для партнеров`,
            ]}
            title="Продавцам"
          />
          <Column
            rows={[`О GreenLeaf`, `Вакансии`, `Контакты`, `Реквизиты`]}
            title="О компании"
          />
        </ul>
      </footer>
      <section className={styles.terms}>
        <ul className={styles.termsList}>
          <li className={styles.term}>
            <Typography.Text className={styles.termText}>
              Мобильная версия
            </Typography.Text>
          </li>
          <li className={styles.term}>
            <Typography.Text className={styles.termText}>
              Пользовательское соглашение
            </Typography.Text>
          </li>
          <li className={styles.term}>
            <Typography.Text className={styles.termText}>
              2021 © GreenLeaf
            </Typography.Text>
          </li>
        </ul>
      </section>
    </>
  )
}

export default Footer
