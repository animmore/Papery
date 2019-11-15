import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import ChatsScreen from './src/components/ChatsScreen'
import ChatScreen from './src/components/ChatScreen'
import ContactsScreen from './src/components/ContactsScreen'
import SettingScreen from './src/components/SettingsScreen'
import RegistrationScreen from './src/components/RegistrationScreen'
import LoginScreen from './src/components/LoginScreen'
import WelcomeScreen from './src/components/WelcomeScreen'
import CreateAccountScreen from './src/components/CreateAccountScreen'

import ReduxThunk from 'redux-thunk'
import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'
import {rootReducer} from './src/configs/rootReducer'

const RootTab = createBottomTabNavigator({
  Contacts: {
    screen: ContactsScreen,
  },
  Chats: {
    screen: ChatsScreen,
  },
  Settings: {
    screen: SettingScreen,
  },
})

const RootStack = createStackNavigator({
  WelcomeScreen: {
    screen: WelcomeScreen,
    navigationOptions: () => ({
      title: 'Welcome to Papery!',
      headerTitleStyle: {
        fontSize: 22,
        color: '#fff',
      },
      headerStyle: {
        backgroundColor: '#4571e6',
      },
    }),
  },
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: () => ({
      title: 'Login',
    }),
  },
  RegistrationScreen: {
    screen: RegistrationScreen,
    navigationOptions: () => ({
      title: 'Registration',
    }),
  },
  CreateAccountScreen: {
    screen: CreateAccountScreen,
    navigationOptions: () => ({
      title: 'Create your profile',
    }),
  },
  ChatsScreen: {
    screen: RootTab,
    navigationOptions: () => ({
      title: 'Papery',
      headerTitleStyle: {
        fontSize: 22,
        color: '#fff',
      },
      headerStyle: {
        backgroundColor: '#4571e6',
      },
    }),
  },
  ChatScreen: {
    screen: ChatScreen,
    navigationOptions: () => ({
      title: 'Chat',
    }),
  },
})
const AppContainer = createAppContainer(RootStack)

const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  )
}

export default App
