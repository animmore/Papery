import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Image, FlatList} from 'react-native'
import {NavigationState, NavigationScreenProp} from 'react-navigation'
import useFormInput from '../../hooks/use-form-input'
import {getMessages, sendMessage} from '../../api/client'
import {useSelector} from 'react-redux'

type Props = {
  navigation: NavigationScreenProp<NavigationState>,
}

function ChatMessage({message, userName}) {
  const userFirstName = useSelector((state) => state.createAccountReducer.firstName)

  const {type, text} = message

  const isOut = type === 'out'

  const style = isOut ? styles.myUserMsgs : styles.contactMsgs

  const name = isOut ? userFirstName : userName

  return (
    <View style={style}>
      <Text style={styles.contactMsgsName}>{name}</Text>
      <Text style={styles.contactMsgsText}>{text}</Text>
    </View>
  )
}

const randomMessages = ['Hello, how are you?']

const ChatScreen = ({navigation}: Props) => {
  const [textInput, onTextInputChange] = useFormInput('')

  const name = navigation.getParam('name')
  const surname = navigation.getParam('surname')
  const image = navigation.getParam('image')
  const email = navigation.getParam('email')

  const [messages, setMessages] = useState([])

  useEffect(() => {
    getMessages(email).then((data) => setMessages(data))
  }, [])

  function send() {
    sendMessage(email, textInput, 'out').then((data) => setMessages(data))
    onTextInputChange()('')

    setTimeout(() => {
      const message = randomMessages[0]
      sendMessage(email, message, 'in').then((data) => setMessages(data))
    }, 2000)
  }

  renderItem = ({messages, item}) => {
    return <ChatMessage message={item} userName={name} />
  }

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
        <FlatList
          data={messages}
          renderItem={renderItem}
          keyExtractor={(item, email) => `${email}`}
        />
      </View>
      <View style={styles.messageInput}>
        <View style={styles.separator} />
        <View style={styles.messageFromMe}>
          <TextInput
            multiline
            selectionColor={'white'}
            style={styles.textInput}
            onChangeText={onTextInputChange()}
            placeholder={'Write a message...'}
            placeholderTextColor={'white'}
            value={textInput}
          />
          <TouchableOpacity style={styles.sendMessage} onPress={send}>
            <Text style={styles.sendMessageBtn}>SEND</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contactMsgsName: {
    color: 'white',
  },
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
