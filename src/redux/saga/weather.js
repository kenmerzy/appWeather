import {
  call, put, takeLatest,
} from 'redux-saga/effects'
import axios from 'axios'
import { weatherTypes } from '../types'
import { weatherActions } from '../actions'

function* getWeatherSaga(action) {
  try {
    const weather = yield call(
      () => axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${action.payload}&appid=e38051523c69fa565854d465504a1ab3&units=metric`)
    )
    yield put({ type: weatherTypes.GET_WEATHER_SUCCESS, payload: { data: weather.data } })
  } catch (error) {
    yield put({ type: weatherTypes.GET_WEATHER_FAIL, payload: { error } })
  }
}

function* weatherSaga() {
  yield takeLatest(weatherTypes.GET_WEATHER, getWeatherSaga)
}

export default weatherSaga
