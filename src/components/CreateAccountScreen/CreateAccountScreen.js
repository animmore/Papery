import React from 'react'
import {View, Text, TextInput, Image, TouchableOpacity, StyleSheet} from 'react-native'
import {NavigationState, NavigationScreenProp} from 'react-navigation'
import useCreateAccountScreen from './useCreateAccountScreen'
import useFormInput from '../../hooks/use-form-input'
import {useDispatch} from 'react-redux'
import {addAccountData} from '../../actions/actions'

type Props = {
  navigation: NavigationScreenProp<NavigationState>,
}

const CreateAccountScreen = ({navigation}: Props) => {
  const [lastName, onLastNameChange] = useFormInput('')
  const [firstName, onFirstNameChange] = useFormInput('')

  const dispatch = useDispatch()

  const handleCreationData = () => {
    console.log(firstName, lastName)
    dispatch(addAccountData(firstName, lastName))
  }

  const handleNavigation = () => {
    handleCreationData()

    return navigation.navigate('ChatsScreen')
  }

  return (
    <View style={styles.createAccView}>
      <View style={styles.createAccTextContainer}>
        <Text style={styles.createAccText}>Please, add your photo and data below.</Text>
      </View>
      <View style={styles.createAccData}>
        <View style={styles.userPhoto}></View>
        <View style={styles.userName}>
          <TextInput
            onChangeText={onFirstNameChange()}
            value={firstName}
            style={styles.input}
            placeholder="Name"
          />
          <TextInput
            onChangeText={onLastNameChange()}
            value={lastName}
            style={styles.input}
            placeholder="Surname"
          />
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
