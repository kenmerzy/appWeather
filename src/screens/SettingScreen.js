import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const SettingScreen = (props) => {
  const { navigation } = props
  return (

    <View style={{
      flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'orange',
    }}
    >
      <Text style={{ fontSize: 25 }}>This screen is Setting Screen</Text>
      <View style={{ marginTop: 50 }}>
        <TouchableOpacity
          onPress={() => { navigation.goBack() }}
        >
          <Text style={{ fontSize: 20 }}> Go back to MainScreen</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default SettingScreen
