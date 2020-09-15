import React, { useState, useEffect } from 'react'
import {
  View, Text, Dimensions,
  Image, SafeAreaView, StyleSheet, RefreshControl,
} from 'react-native'
import axios from 'axios'
import moment from 'moment'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-community/async-storage'
import {
  iconSearch, iconSetting, backgroundSnowing,
} from '../../assets/images'
import Timer from '../components/Timer'

const { width, height } = Dimensions.get('window')

const MainScreen = (props) => {
  // eslint-disable-next-line react/destructuring-assignment
  console.tron.log({
    // eslint-disable-next-line react/destructuring-assignment
    navigation: props.navigation,
    route: props.route,
  })
  const { navigation, route } = props
  const [weather, setWeather] = useState(route?.params?.weather)
  const [isLoadingData, setIsLoadingData] = useState(false)
  const navigateToSettingScreen = () => {
    navigation.navigate('SettingScreen')
  }
  // eslint-disable-next-line react/sort-comp

  useEffect(() => {
    getWeatherByLocation()
  }, [])

  const getWeatherByLocation = async () => {
    const respone = await axios.get('http://api.openweathermap.org/data/2.5/weather?q=Ho%20Chi%20Minh&appid=e38051523c69fa565854d465504a1ab3&units=metric')

    setWeather(respone.data)
    AsyncStorage.setItem('weather', JSON.stringify(respone.data))
  }

  if (!weather) {
    return (<View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }}
    >
      <Text>Loading...</Text>
    </View>)
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
        refreshControl={<RefreshControl
          refreshing={isLoadingData}
          onRefresh={async () => {
            setIsLoadingData(true)
            await getWeatherByLocation()
            const timeout = setTimeout(() => {
              setIsLoadingData(false)
              clearTimeout(timeout)
            }, 2000)
          }}
          tintColor="#FFFFFF"
        />}
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
            {`${weather?.name}`}
          </Text>

          <Timer />

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
            style={styles.separator}
          />

          <View style={{
            flexDirection: 'row',
            paddingHorizontal: 44 / 375 * width,
            justifyContent: 'space-between',
            marginTop: 40 / 375 * width,
          }}
          >
            {weather?.wind?.speed ? <View>
              <Text style={{ fontFamily: 'Gilroy-Bold', fontSize: 24 / 375 * width, color: 'rgba(255,255,255,0.7)' }}>Wind</Text>
              <Text style={{
                fontFamily: 'Gilroy-Bold', fontSize: 36 / 375 * width, color: '#fff', marginVertical: 10 / 375 * width,
              }}
              >
                {weather?.wind?.speed}
              </Text>
              <Text style={{ fontFamily: 'Gilroy-Bold', fontSize: 24 / 375 * width, color: '#fff' }}>km/h</Text>
            </View> : null}
            {weather?.clouds?.all ? <View>
              <Text style={{ fontFamily: 'Gilroy-Bold', fontSize: 24 / 375 * width, color: 'rgba(255,255,255,0.7)' }}>Cloud</Text>
              <Text style={{
                fontFamily: 'Gilroy-Bold', fontSize: 36 / 375 * width, color: '#fff', marginVertical: 10 / 375 * width,
              }}
              >
                {weather?.clouds?.all}
              </Text>
              <Text style={{ fontFamily: 'Gilroy-Bold', fontSize: 24 / 375 * width, color: '#fff' }}>%</Text>
            </View> : null}
            {weather?.main?.humidity ? <View>
              <Text style={{ fontFamily: 'Gilroy-Bold', fontSize: 24 / 375 * width, color: 'rgba(255,255,255,0.7)' }}>Humidity</Text>
              <Text style={{
                fontFamily: 'Gilroy-Bold', fontSize: 36 / 375 * width, color: '#fff', marginVertical: 10 / 375 * width,
              }}
              >
                {weather?.main?.humidity}
              </Text>
              <Text style={{ fontFamily: 'Gilroy-Bold', fontSize: 24 / 375 * width, color: '#fff' }}>%</Text>
            </View> : null}
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
    marginTop: 52 * width / 375,
  },
})
