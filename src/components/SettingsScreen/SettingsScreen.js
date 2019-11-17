import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
import useSettingsScreen from './useSettingsScreen'

const SettingsScreen = () => {
  const {userFirstName, userLastName} = useSettingsScreen()
  return (
    <View style={styles.user}>
      <Text style={styles.userNameText}>
        Account: {userFirstName} {userLastName}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  user: {
    backgroundColor: '#4571e6',
    flex: 1,
    alignItems: 'center',
  },

  userNameText: {
    color: 'black',
    fontSize: 22,
    marginTop: '5%',
  },
})

export default SettingsScreen
