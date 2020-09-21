import { weatherTypes } from '../types'

const initState = {

}
const weatherReducer = (state = initState, action) => {
  switch (action.type) {
    case weatherTypes.GET_WEATHER_SUCCESS:
      const { data } = action.payload
      return { ...state, ...data }
    default:
      return state
  }
}
export default weatherReducer
