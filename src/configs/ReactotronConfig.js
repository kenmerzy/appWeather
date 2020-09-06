// eslint-disable-next-line import/no-extraneous-dependencies
import Reactotron from 'reactotron-react-native'
import AsyncStorage from '@react-native-community/async-storage'

Reactotron
  .setAsyncStorageHandler(AsyncStorage)
  .configure({
    name: 'Weather React Native',
    host: 'localhost',
    port: 9090,
  })
  .useReactNative()
  .connect()
