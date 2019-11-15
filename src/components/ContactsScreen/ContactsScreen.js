import React from 'react'
import {View, Text, Image, TouchableOpacity, TextInput, StyleSheet, FlatList} from 'react-native'
import {NavigationState, NavigationScreenProp} from 'react-navigation'
import {useContactsScreen} from './useContactsScreen'

type Props = {
  navigation: NavigationScreenProp<NavigationState>,
}

const ContactsScreen = ({navigation}: Props) => {
  const {filtratedContacts, searchContacts} = useContactsScreen()

  const openChatPage = (item) => {
    return navigation.navigate('ChatScreen', {
      name: item.name.first,
      surname: item.name.last,
      image: item.picture.thumbnail,
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
          onChangeText={searchContacts()}
        />
      </View>
      <View>
        <FlatList
          data={filtratedContacts}
          renderItem={renderItem}
          keyExtractor={(filtratedContacts, index) => `${index}`}
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
