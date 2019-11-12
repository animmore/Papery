import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const ChatsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}> Chats Screen </Text>
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

export default ChatsScreen
