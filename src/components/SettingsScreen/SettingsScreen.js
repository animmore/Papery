import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
import useSettingsScreen from './useSettingsScreen'

const SettingsScreen = () => {
  const {userPhoneNumber, userFirstName, userLastName} = useSettingsScreen()
  return (
    <View style={styles.user}>
      <View style={styles.userName}>
        <Text style={styles.userNameText}>
          {userFirstName} {userLastName} 000000
        </Text>

        <Text style={styles.userNamePhone}>{userPhoneNumber}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  user: {},
  userName: {
    backgroundColor: 'yellow',
    marginTop: '50%',
  },
  userNameText: {
    color: 'red',
  },
})

export default SettingsScreen
