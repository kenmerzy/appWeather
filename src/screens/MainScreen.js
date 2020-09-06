import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import axios from 'axios'

const MainScreen = () => {
  const [weather, setWeather] = useState(false)

  // eslint-disable-next-line react/sort-comp

  useEffect(() => {
    getWeatherByLocation()
  }, [])

  const getWeatherByLocation = async () => {
    const respone = await axios.get('http://api.openweathermap.org/data/2.5/weather?q=Ho%20Chi%20Minh&appid=e38051523c69fa565854d465504a1ab3&units=metric')

    const timeout = setTimeout(() => {
      setWeather(respone.data)
      clearTimeout(timeout)
    }, 2000)
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>
        {weather?.clouds?.all}
      </Text>
    </View>
  )
}
export default MainScreen
