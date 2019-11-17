/* eslint-disable */
//@flow
import React from 'react'
import {View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground} from 'react-native'
import {NavigationState, NavigationScreenProp} from 'react-navigation'
import PhoneInput from 'react-native-phone-input'
import {addRegistrationData} from '../../actions/actions'
import useRegistrationScreen from './useRegistrationScreen'

type Props = {
  navigation: NavigationScreenProp<NavigationState>,
  addRegistrationData: (phoneNumber: string, password: string) => any,
}

const RegistrationScreen = ({navigation}: Props) => {
  const {phoneNumber, password, handleTextChanged, onSubmit} = useRegistrationScreen()

  const handleNavigation = () => {
    navigation.navigate('CreateAccountScreen')
  }

  return (
    <ImageBackground style={styles.welcomeView}>
      <View style={styles.registrationView}>
        <View style={styles.registrationTextContainer}>
          <Text style={styles.registrationText}>Input your phone number</Text>
        </View>
        <View style={styles.inputPhoneNumberContainer}>
          <TextInput
            style={styles.inputPhoneNumber}
            placeholder="Phone number"
            keyboardType="phone-pad"
            onChangeText={handleTextChanged('phoneNumber')}
          />
          <TextInput
            style={styles.inputPassword}
            placeholder="Password"
            onChangeText={handleTextChanged('password')}
          />
        </View>
        <View style={styles.registrationBtnContainer}>
          <TouchableOpacity
            style={styles.registrationBtn}
            disabled={phoneNumber < 3 && password < 3}
            onPress={handleNavigation}
          >
            <Text style={styles.registrationBtnText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  welcomeView: {
    flex: 1,
    alignItems: 'center',
  },
  registrationView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  registrationTextContainer: {
    flex: 1.1,
    justifyContent: 'flex-end',
  },
  inputPhoneNumberContainer: {
    flex: 2,
    justifyContent: 'space-around',
  },
  registrationBtnContainer: {
    flex: 3,
    justifyContent: 'space-around',
  },
  registrationText: {
    fontSize: 22,
  },
  inputPhoneNumber: {
    fontSize: 22,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  inputPassword: {
    fontSize: 22,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  registrationBtn: {
    height: 40,
    backgroundColor: 'yellow',
    borderRadius: 10,
    marginBottom: 100,
    width: 170,
  },
  registrationBtnText: {
    fontSize: 22,
    padding: 5,
    alignSelf: 'center',
  },
})

export default RegistrationScreen
