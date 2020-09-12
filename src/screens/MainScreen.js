import React, { useState, useEffect } from 'react'
import {
  View, Text, Dimensions,
  Image, SafeAreaView, StyleSheet,
} from 'react-native'
import axios from 'axios'
import moment from 'moment'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler'
import {
  iconSearch, iconSetting, backgroundSnowing, iconSnowing,
} from '../../assets/images'

const { width, height } = Dimensions.get('window')

const MainScreen = (props) => {
  console.tron.log({ navigation: props.navigation })
  const { navigation } = props
  const [weather, setWeather] = useState(false)

  const navigateToSettingScreen = () => {
    navigation.navigate('SettingScreen')
  }
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

    <View style={styles.container}>
      <Image
        source={backgroundSnowing}
        style={styles.background}

      />

      <SafeAreaView />
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 29 * width / 375,
        paddingBottom: 10 * width / 375,
        paddingHorizontal: 34 * width / 375,
      }}
      >
        <View>
          <TouchableOpacity
            onPress={() => { }}
          >
            <Image
              source={iconSearch}
              style={{
                width: 28 * width / 375,
                height: 28 * width / 375,
              }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            onPress={navigateToSettingScreen}
          >
            <Image
              source={iconSetting}
              style={{
                width: 30 * width / 375,
                height: 20 * width / 375,
              }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View style={{
          paddingBottom: 52 * width / 375,
        }}
        >

          <Text style={{
            fontFamily: 'Gilroy-Bold',
            fontSize: 36 * width / 375,
            color: '#FFFFFF',
            marginTop: 18 * width / 375,
            paddingHorizontal: 34 * width / 375,

          }}
          >
            Ho Chi Minh City
          </Text>
          <Text style={{
            fontFamily: 'Gilroy-Bold',
            fontSize: 18 * width / 375,
            color: '#FFFFFF',
            marginTop: 8 * width / 375,
            paddingHorizontal: 34 * width / 375,

          }}
          >
            {moment().format('LT - ddd, DD MMM yyyy')}
          </Text>
          <Text style={{
            fontFamily: 'Gilroy-Bold',
            fontSize: 96 * width / 375,
            color: '#FFFFFF',
            marginTop: 120 * width / 375,
            paddingHorizontal: 34 * width / 375,

          }}
          >
            {`${weather?.main?.temp} *`}

          </Text>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 28 * width / 375,
            paddingHorizontal: 34 * width / 375,

          }}
          >
            <Image
              source={{ uri: `http://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png` }}
              style={{
                width: 34 * width / 375,
                height: 38 * width / 375,
              }}
              resizeMode="contain"
            />
            <Text style={{
              fontFamily: 'Gilroy-Bold',
              color: '#FFFFFF',
              fontSize: 24 * width / 375,
              marginLeft: 6 * width / 375,
            }}
            >
              {`${weather?.weather[0]?.main}`}
            </Text>

          </View>
          <View
            style={separator}
          />

          <View>
            <ScrollView>
              <View>

              </View>

            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </View>

  )
}

export default MainScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    width,
    height,
    position: 'absolute',
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    marginHorizontal: 28 * width / 375,
    backgroundColor: '#998383',
    marginTop: 52 * width / 375
  }
})
