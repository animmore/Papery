import React from 'react'
import {View, Text, TextInput, Image, TouchableOpacity, StyleSheet} from 'react-native'
import {NavigationState, NavigationScreenProp} from 'react-navigation'

type Props = {
  navigation: NavigationScreenProp<NavigationState>,
}

const CreateAccountScreen = ({navigation}: Props) => {
  const handleNavigation = () => {
    navigation.navigate('ChatsScreen')
  }

  return (
    <View style={styles.createAccView}>
      <Text style={styles.createAccText}>Please, add your photo and data below.</Text>
      <View style={styles.createAccData}>
        <View style={styles.userPhoto}>
          <Text>Photo</Text>
        </View>
        <View style={styles.userName}>
          <TextInput style={styles.input} placeholder="Name" />
          <TextInput style={styles.input} placeholder="Surname" />
        </View>
      </View>
      <TouchableOpacity style={styles.createAccBtn} onPress={handleNavigation}>
        <Text style={styles.createAccBtnText}>Next</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  createAccView: {
    flex: 1,
    justifyContent: 'center',
  },
  createAccText: {
    fontSize: 22,
    marginTop: 40,
  },
  createAccData: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    alignContent: 'space-around',
  },
  input: {
    marginTop: 10,
    width: 86,
    fontSize: 22,
  },
  createAccBtn: {
    height: 40,

    backgroundColor: 'yellow',
    alignSelf: 'center',
    marginBottom: 45,
  },
  createAccBtnText: {
    fontSize: 22,
  },
})

export default CreateAccountScreen
