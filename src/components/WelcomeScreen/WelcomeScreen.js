import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet, ImageBackground} from 'react-native'
import {NavigationState, NavigationScreenProp} from 'react-navigation'
import {white} from 'ansi-colors'

const WelcomeScreen = ({navigation}: Props) => {
  const handleNavigation = () => {
    navigation.navigate('RegistrationScreen')
  }

  return (
    <ImageBackground source={require('../../../assets/welcome.png')} style={styles.welcomeView}>
      <View style={styles.welcomeTextContainer}>
        <Text style={styles.welcomeText}>Keep in tounch with Universe! </Text>
      </View>
      <View style={styles.welcomeBtnContainer}>
        <TouchableOpacity style={styles.welcomeBtn} onPress={handleNavigation}>
          <Text style={styles.welcomeBtnText}>Start messaging</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  welcomeView: {
    flex: 1,
    alignItems: 'center',
  },
  welcomeTextContainer: {
    flex: 0.55,
    // backgroundColor: 'purple',
    justifyContent: 'space-around',
  },
  welcomeBtnContainer: {
    // backgroundColor: 'white',
    flex: 1,
    justifyContent: 'space-around',
  },
  welcomeText: {
    fontSize: 22,
    color: 'white',
  },
  welcomeBtn: {
    height: 40,
    backgroundColor: 'yellow',
    borderRadius: 10,
  },
  welcomeBtnText: {
    fontSize: 22,
    padding: 5,
  },
})

export default WelcomeScreen
