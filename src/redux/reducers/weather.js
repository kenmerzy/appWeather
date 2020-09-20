import { weatherTypes } from '../types'

const initState = {

}
const weatherReducer = (state = initState, action) => {
  switch (action.type) {
    case weatherTypes.GET_WEATHER:
      return { ...state }
    default:
      return state
  }
}
export default weatherReducer
