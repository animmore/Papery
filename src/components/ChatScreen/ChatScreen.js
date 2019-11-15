import React from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Image} from 'react-native'
import {NavigationState, NavigationScreenProp} from 'react-navigation'
import useChatScreen from './useChatScreen'

type Props = {
  navigation: NavigationScreenProp<NavigationState>,
}

const ChatScreen = ({navigation}: Props) => {
  const {handleTextInput, textInput} = useChatScreen()

  const name = navigation.getParam('name')
  const surname = navigation.getParam('surname')
  const image = navigation.getParam('image')

  return (
    <View style={styles.container}>
      <View style={styles.searchMessageContainer}>
        <TextInput
          style={styles.searchMessage}
          placeholder={'Search'}
          placeholderTextColor={'gray'}

          /*onChangeText={searchMessage()}*/
        />
      </View>
      <View style={styles.header}>
        <View style={styles.contactPhotoContainer}>
          <Image source={{uri: image}} style={styles.contactPhoto} />
        </View>
        <Text style={styles.contactName}>
          {name} {surname}
        </Text>
      </View>
      <View style={styles.separator} />
      <View style={styles.chat}>
        <Text>Chat</Text>
      </View>
      <View style={styles.messageInput}>
        <View style={styles.separator} />
        <View style={styles.messageFromMe}>
          <TextInput
            multiline
            numberOfLines={4}
            selectionColor={'white'}
            style={styles.textInput}
            onChangeText={handleTextInput('textInput')}
            placeholder={'Write a message...'}
            placeholderTextColor={'white'}
            value={textInput}
          />
          <TouchableOpacity style={styles.sendMessage}>
            <Text style={styles.sendMessageBtn}>SEND</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#4571e6',
  },
  searchMessageContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  searchMessage: {
    backgroundColor: 'white',
    borderRadius: 10,
    height: '60%',
    width: '90%',
    paddingLeft: '10%',
    marginLeft: '2%',
    marginBottom: '1%',
  },
  header: {
    flex: 1,
    marginBottom: '2%',
    flexDirection: 'row',
  },
  chat: {
    flex: 12,
  },
  contactName: {
    color: 'white',
    fontSize: 16,
  },
  contactPhoto: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  messageInput: {
    flex: 1.5,
  },
  textInput: {
    fontSize: 16,
    color: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  messageFromMe: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  sendMessageBtn: {
    color: 'white',
  },
  separator: {
    marginBottom: '5%',

    height: 2,
    width: '100%',
    backgroundColor: 'black',
  },
})

export default ChatScreen
