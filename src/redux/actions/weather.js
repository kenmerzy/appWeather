import { weatherTypes } from '../types'

export const getWeather = (data) => {
  return {
    type: weatherTypes.GET_WEATHER,
    payload: data,
  }
}
