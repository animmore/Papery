import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet, TextInput} from 'react-native'
import {NavigationState, NavigationScreenProp} from 'react-navigation'

type Props = {
  navigation: NavigationScreenProp<NavigationState>,
}

const LoginScreen = ({navigation}: Props) => {
  const handleNavigationToRegistrationScreen = () => {
    navigation.navigate('RegistrationScreen')
  }
  const handleNavigationToChatsScreen = () => {
    navigation.navigate('ChatsScreen')
  }

  return (
    <View style={styles.container}>
      <View style={styles.login}>
        <Text style={styles.headerInputText}>Username</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Username"
          // value={username}
          //onPress={onUserName}
        />
        <Text style={styles.headerInputText}>Password</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          // value = {password}
          // onPress={onPassword}
        />
      </View>
      <View style={styles.containerButtons}>
        <TouchableOpacity style={styles.loginButton} onPress={handleNavigationToChatsScreen}>
          <Text style={styles.textLoginButton}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.registerButton}
          onPress={handleNavigationToRegistrationScreen}
        >
          <Text style={styles.textRegistrationButton}>Registration</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  login: {
    flex: 1,
  },
  loginText: {
    fontSize: 22,
  },
  headerInputText: {
    fontSize: 16,
    marginTop: '3%',
    marginLeft: '5%',
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    borderRadius: 10,
    height: '10%',
    width: '90%',
    marginTop: '3%',
    alignSelf: 'center',
  },
  containerButtons: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
  },
  loginButton: {
    height: '10%',
    width: '20%',
    backgroundColor: 'yellow',
    borderRadius: 10,
    justifyContent: 'center',
  },
  textLoginButton: {
    alignSelf: 'center',
  },
  registerButton: {
    height: '10%',
    width: '25%',
    justifyContent: 'center',
  },
  textRegistrationButton: {
    alignSelf: 'center',
  },
})

export default LoginScreen
