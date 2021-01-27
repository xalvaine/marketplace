import { GetStaticProps, GetStaticPaths } from 'next'
import { Forecast } from 'interfaces/forecast'
import api from 'api'
import Layout from 'components/Layout'
import CityWeather from '../../components/CityWeather'
import { useRouter } from 'next/router'

interface Props {
  forecast: Forecast
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const cityName = context.params?.city
  if (!cityName) return { notFound: true }
  try {
    const { data } = await api.get(`/weather`, {
      params: { q: cityName, appid: process.env.WEATHER_API, units: `metric` },
    })
    return { revalidate: 15, props: { forecast: data as Forecast } }
  } catch (e) {
    console.error(e)
    return { notFound: true }
  }
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: true,
})

const Weather = (props: Props) => {
  const { forecast } = props
  
  const router = useRouter()

  return (
    <Layout>
      {router.isFallback ? `Загрузка...` : <CityWeather forecast={forecast} />}
    </Layout>
  )
}

export default Weather
