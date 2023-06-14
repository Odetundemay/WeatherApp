import { Feather } from '@expo/vector-icons'
import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import RowText from '../components/RowText'
import { weatherType } from '../utilities/weatherType'

const CurrentWeather = ({ weatherData }) => {
  const {
    wrapper,
    container,
    tempStyles,
    feel,
    highLowWrapper,
    highLow,
    bodyWrapper,
    description,
    message
  } = styles
  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather
  } = weatherData

  const weatherCondition = weather[0]?.main
  return (
    <SafeAreaView
      style={[
        wrapper,
        { backgroundColor: weatherType[weatherCondition].backgroundColor }
      ]}
    >
      <View style={container}>
        <Feather
          name={weatherType[weatherCondition]?.icon}
          size={100}
          color='white'
        />
        <Text style={tempStyles}>{temp}°</Text>
        <Text style={feel}>{`Feels like ${feels_like}°`}</Text>
        <RowText
          containerStyles={highLowWrapper}
          messageOne={`High: 8 ${temp_max}° `}
          messageTwo={`Low: 6 ${temp_min}°`}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
        />
      </View>
      <RowText
        containerStyles={bodyWrapper}
        messageOne={weather[0].description}
        messageTwo={weatherType[weatherCondition]?.message}
        messageOneStyles={description}
        messageTwoStyles={message}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'pink'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tempStyles: {
    color: 'black',
    fontSize: 48
  },
  feel: {
    fontSize: 30,
    color: 'black'
  },
  highLowWrapper: { flexDirection: 'row' },
  highLow: {
    color: 'black',
    fontSize: 20
  },
  bodyWrapper: {
    justifyContent: 'flex-end', //Justify Content at the bottem of the screen
    alignItems: 'flex-start', //align item far left of the screen
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 43
  },
  message: {
    fontSize: 25
  }
})

export default CurrentWeather
