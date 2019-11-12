import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet, ImageBackground} from 'react-native'
import {NavigationState, NavigationScreenProp} from 'react-navigation'

const WelcomeScreen = ({navigation}: Props) => {
  const handleNavigation = () => {
    navigation.navigate('RegistrationScreen')
  }

  return (
    <ImageBackground source={require('../../../assets/welcome.png')} style={styles.welcomeView}>
      <Text style={styles.welcomeText}>Keep in tounch with Universe! </Text>
      <TouchableOpacity style={styles.welcomeBtn} onPress={handleNavigation}>
        <Text style={styles.welcomeBtnText}>Start messaging</Text>
      </TouchableOpacity>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  welcomeView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  welcomeText: {
    fontSize: 22,
    flex: 10,
  },
  welcomeBtn: {
    height: 40,
    backgroundColor: 'yellow',
    flex: 0.5,
  },
  welcomeBtnText: {
    fontSize: 22,
  },
})

export default WelcomeScreen
