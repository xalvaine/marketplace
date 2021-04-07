import { Typography } from '@/components'
import styles from './footer.module.scss'
import Column from './Column'
import VK from './assets/bxl-vk.svg'
import Facebook from './assets/bxl-facebook-circle.svg'
import Instagram from './assets/bxl-instagram-alt.svg'

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <ul className={styles.columns}>
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
          <li>
            <Typography.Title
              className={styles.title}
              level={5}
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
          </li>
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
