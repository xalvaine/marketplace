import { Typography } from '@/components'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/pages/_app'
import { authorizationAPI } from '@/api'
import styles from './timer.module.scss'

const calculateTimeLeft = (date: Date) => {
  const delta = Math.max(Math.floor((+date - +new Date()) / 1000), 0)
  const minutes = Math.floor((delta % 3600) / 60)
  const seconds = delta % 60

  return { minutes, seconds }
}

const Timer = () => {
  const { username, registered } = useSelector(
    (state: RootState) => state.authorization,
  )
  const [endDate, setEndDate] = useState(new Date(+new Date() + 59999))
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(endDate))

  useEffect(() => {
    const interval = setInterval(() => {
      const remaining = calculateTimeLeft(endDate)
      setTimeLeft(remaining)
      if (!remaining.minutes && !remaining.seconds) {
        clearInterval(interval)
      }
    }, 100)
    return () => clearInterval(interval)
  }, [endDate])

  const handleGetCode = async () => {
    setEndDate(new Date(+new Date() + 59999))
    await authorizationAPI.post(registered ? `/signin` : `/signup`, {
      username,
    })
  }

  if (!timeLeft.minutes && !timeLeft.seconds) {
    return (
      <Typography.Text
        disabled
        secondary
        className={styles.getNewCode}
        onClick={handleGetCode}
      >
        Получить новый код
      </Typography.Text>
    )
  }

  return (
    <Typography.Text disabled secondary>
      Получить новый код можно через
      <br />
      {timeLeft.minutes.toString().padStart(2, `0`)}:
      {timeLeft.seconds.toString().padStart(2, `0`)}
    </Typography.Text>
  )
}

export default Timer
