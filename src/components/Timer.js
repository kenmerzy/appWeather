import React, { useState, useEffect } from 'react'
import { Text, Dimensions } from 'react-native'
import moment from 'moment'

const { width } = Dimensions.get('window')

const Timer = ({
  params,
}) => {
  const [dem, setDem] = useState(1)
  useEffect(() => {
    const inter = setInterval(() => {
      setDem(dem + 1)
    }, 1000)
    return () => { clearInterval(inter) }
  }, [dem])

  return (
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
  )
}
export default Timer
