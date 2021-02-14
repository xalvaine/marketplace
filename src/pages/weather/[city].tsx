import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import { Forecast } from '@/interfaces/forecast'
import api from '@/api'
import Layout from '@/components/Layout'
import CityWeather from '@/components/CityWeather'

interface Props {
  date: string
  forecast?: Forecast
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const cityName = context.params?.city
  if (!cityName) return { notFound: true }
  try {
    const { data } = await api.get(`/weather`, {
      params: { q: cityName, appid: process.env.WEATHER_API, units: `metric` },
    })
    return {
      revalidate: 15,
      props: { forecast: data as Forecast, date: new Date().toJSON() },
    }
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
  const { forecast, date } = props

  return (
    <>
      <Head>
        <title>Weather in {forecast?.name}</title>
      </Head>
      <Layout>
        {forecast ? (
          <CityWeather forecast={forecast} date={date} />
        ) : (
          `Загрузка...`
        )}
      </Layout>
    </>
  )
}

export default Weather
