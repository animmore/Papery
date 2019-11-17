import React from 'react'
import {View, Text, Image, TouchableOpacity, TextInput, StyleSheet, FlatList} from 'react-native'
import {NavigationState, NavigationScreenProp} from 'react-navigation'

import useLoadAction from '../../hooks/use-load-action'
import useFormInput from '../../hooks/use-form-input'
import useFilter from '../../hooks/use-filter'

type Props = {
  navigation: NavigationScreenProp<NavigationState>,
}

const fetchContacts = () => {
  return fetch('https://randomuser.me/api/?results=20&inc=name,gender,dob,email,phone,picture')
    .then((response) => response.json())
    .then((data) => data.results)
}

const ContactsScreen = ({navigation}: Props) => {
  const contacts = useLoadAction(fetchContacts, [])
  const [searchInput, onSearchInputChange] = useFormInput('')
  const filteredContacts = useFilter(contacts, searchInput, 'name')

  const openChatPage = (item) => {
    return navigation.navigate('ChatScreen', {
      name: item.name.first,
      surname: item.name.last,
      image: item.picture.thumbnail,
      email: item.email
    })
  }

  renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          openChatPage(item)
        }}
      >
        <View style={styles.contactCard}>
          <View style={styles.contactPhotoContainer}>
            <Image source={{uri: item.picture.thumbnail}} style={styles.contactPhoto} />
          </View>
          <View style={styles.contactNameContainer}>
            <Text style={styles.contactName}>
              {item.name.first} {item.name.last}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.search}
          placeholder={'Search..'}
          placeholderTextColor={'gray'}
          onChangeText={onSearchInputChange()}
        />
      </View>
      <View>
        <FlatList
          data={filteredContacts}
          renderItem={renderItem}
          keyExtractor={(filteredContacts, index) => `${index}`}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contactCard: {
    backgroundColor: '#649EEA',
    borderRadius: 10,
    margin: 5,
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#4571e6',
  },
  contactName: {
    alignSelf: 'flex-start',
    height: 50,
    padding: 10,
    color: 'white',
  },
  contactPhotoContainer: {},
  contactPhoto: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  searchContainer: {
    justifyContent: 'center',
  },
  search: {
    backgroundColor: 'white',
    borderRadius: 30,
    height: '10%',
    width: '90%',
    paddingLeft: '10%',
    marginLeft: '2%',
    marginTop: '25%',
    marginBottom: '1%',
  },

  textStyle: {
    fontSize: 24,
    color: 'gray',
    backgroundColor: '#FFF',
  },
})

export default ContactsScreen
