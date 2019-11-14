import React from 'react'
import {View, Text, TextInput, Image, TouchableOpacity, StyleSheet} from 'react-native'
import {NavigationState, NavigationScreenProp} from 'react-navigation'
import useCreateAccountScreen from './useCreateAccountScreen'

type Props = {
  navigation: NavigationScreenProp<NavigationState>,
}

const CreateAccountScreen = ({navigation}: Props) => {
  const handleNavigation = () => {
    navigation.navigate('ChatsScreen')
  }

  const {isProfilePhotoAdded, profilePhoto, handleChooseProfilePhoto} = useCreateAccountScreen()

  return (
    <View style={styles.createAccView}>
      <View style={styles.createAccTextContainer}>
        <Text style={styles.createAccText}>Please, add your photo and data below.</Text>
      </View>
      <View style={styles.createAccData}>
        <View style={styles.userPhoto}>
          <TouchableOpacity onPress={handleChooseProfilePhoto}>
            {isProfilePhotoAdded ? (
              <View style={styles.imageView}>
                <Image source={{uri: avatar}} />
              </View>
            ) : (
              <View style={styles.imageView}>
                {/*  <Image source={require('../../../assets/ .png')} />*/}
              </View>
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.userName}>
          <TextInput style={styles.input} placeholder="Name" />
          <TextInput style={styles.input} placeholder="Surname" />
        </View>
      </View>
      <View style={styles.createAccBtnContainer}>
        <TouchableOpacity style={styles.createAccBtn} onPress={handleNavigation}>
          <Text style={styles.createAccBtnText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  createAccView: {
    flex: 1,
    justifyContent: 'center',
  },
  createAccTextContainer: {
    flex: 1,
    justifyContent: 'space-around',
  },
  createAccBtnContainer: {
    flex: 1,
    alignItems: 'center',
  },
  createAccData: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  createAccText: {
    fontSize: 22,
  },
  input: {
    width: 86,
    fontSize: 22,
    marginTop: 5,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  createAccBtn: {
    height: 40,
    backgroundColor: 'yellow',
    borderRadius: 10,
    width: 170,
  },
  createAccBtnText: {
    fontSize: 22,
    padding: 5,
    alignSelf: 'center',
  },
})

export default CreateAccountScreen
