import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}> Settings Screen </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  textStyle: {
    fontSize: 24,
    color: 'gray',
    backgroundColor: '#FFF',
  },
})

export default SettingsScreen
