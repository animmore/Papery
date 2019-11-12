import React from 'react'
import {View, Text, Image, TouchableOpacity, TextInput, StyleSheet, FlatList} from 'react-native'
import {useContactsScreen} from './useContactsScreen'

const ContactsScreen = (props) => {
  const {filtratedContacts, searchContacts} = useContactsScreen()

  renderItem = ({item, index}) => {
    return (
      <TouchableOpacity>
        <View style={styles.contacts}>
          <View>
            <Image source={{uri: item.picture.large}} style={styles.contactImage} />
          </View>
          <View>
            <Text style={styles.nameContact}>
              {item.name.first} {item.name.last}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.search}
        placeholder={'Search..'}
        placeholderTextColor={'gray'}
        onChangeText={searchContacts()}
      />
      <View style={styles.containerContacts}>
        <FlatList
          windowSize={10}
          data={filtratedContacts}
          renderItem={renderItem}
          keyExtractor={(filtratedContacts, index) => `${index}`}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  contacts: {
    borderBottomWidth: 1,
    borderColor: 'black',
    marginTop: 25,
  },
  nameContact: {
    alignSelf: 'center',
    height: 50,
  },
  search: {
    flex: 0.5,
    alignSelf: 'stretch',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  containerContacts: {
    flex: 5,
  },
  textStyle: {
    fontSize: 24,
    color: 'gray',
    backgroundColor: '#FFF',
  },
})

export default ContactsScreen
