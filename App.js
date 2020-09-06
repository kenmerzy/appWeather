import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { MainScreen } from './src/screens'

const NavigateToMainScreen = () => {

}
const SettingScreen = (props) => {
  const { navigation } = props
  return (

    <View style={{
      flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red',
    }}
    >
      <Text> Setting Screen</Text>
      <View style={{ marginTop: 20 }}>
        <TouchableOpacity
          onPress={() => { navigation.goBack() }}
        >
          <Text> Back to MainScreen</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="SettingScreen" component={SettingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
