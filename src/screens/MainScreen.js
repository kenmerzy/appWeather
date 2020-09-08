import React, { useState, useEffect } from 'react'
import {
  View, Text, Dimensions,
  Image, SafeAreaView, ImageBackground, Swiper, StyleSheet,
} from 'react-native'
import axios from 'axios'
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
    // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //   <Text style={{ fontSize: 20 }}>
    //     {weather?.main?.temp}
    //   </Text>

    //   <View style={{ marginTop: 20 }}>
    //     <TouchableOpacity
    //       onPress={navigateToSettingScreen}
    //     >
    //       <Text> Navigate to SettingScreen</Text>
    //     </TouchableOpacity>
    //   </View>
    // </View>

    <View style={{ flex: 1, paddingHorizontal: 34 }}>
      <Image
        source={backgroundSnowing}
        style={{
          flex: 1,
          width,
          height,
          resizeMode: 'cover',
          justifyContent: 'center',
          position: 'absolute',
        }}
      />

      <SafeAreaView />
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 29,
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
      <ScrollView>
        <View style={{
          borderBottomWidth: StyleSheet.hairlineWidth,
          borderBottomColor: '#998383',
          paddingBottom: 52,
        }}
        >

          <Text style={{
            fontFamily: 'Gilroy-Bold',
            fontSize: 36,
            color: '#FFFFFF',
            marginTop: 28,
          }}
          >
            Ho Chi Minh City
          </Text>
          <Text style={{
            fontFamily: 'Gilroy-Bold',
            fontSize: 18,
            color: '#FFFFFF',
            marginTop: 8,
          }}
          >
            10:30 am - Monday,01 Dec 2020
          </Text>
          <Text style={{
            fontFamily: 'Gilroy-Bold',
            fontSize: 96,
            color: '#FFFFFF',
            marginTop: 120,

          }}
          >
            32 *
          </Text>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
          >
            <Image
              source={iconSnowing}
              style={{
                width: 34,
                height: 38,
              }}
              resizeMode="contain"
            />
            <Text style={{
              fontFamily: 'Gilroy-Bold',
              fontSize: 24,
              color: '#FFFFFF',
              marginTop: 28,

            }}
            >
              Snowing
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>

  )
}
export default MainScreen
