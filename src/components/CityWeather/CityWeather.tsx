import moment from 'moment'
import { Forecast } from '@/interfaces/forecast'
import styles from './cityWeather.module.scss'

interface Props {
  forecast: Forecast
  date: string
}

const CityWeather = (props: Props) => {
  const { forecast, date } = props

  return (
    <div className={styles.wrapper}>
      {}
      <p>
        <span className={styles.highlighted}>Город: </span>
        {forecast.name}
      </p>
      <p>
        <span className={styles.highlighted}>Прогноз от: </span>
        {forecast.dt && moment(forecast?.dt * 1000).format(`HH:mm DD.MM.YYYY`)}
      </p>
      <p>
        <span className={styles.highlighted}>Последний запрос: </span>
        {forecast.dt && moment(date).format(`HH:mm:SS DD.MM.YYYY`)}
      </p>
      <p>
        <span className={styles.highlighted}>Температура: </span>
        {forecast.main.temp} °C
      </p>
      <p>
        <span className={styles.highlighted}>Непосредственно погода: </span>
        {forecast.weather[0].main}, {forecast.weather[0].description}
      </p>
    </div>
  )
}

export default CityWeather
