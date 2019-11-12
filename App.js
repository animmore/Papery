import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import ChatsScreen from './src/components/ChatsScreen';
import ContactsScreen from './src/components/ContactsScreen';
import SettingScreen from './src/components/SettingsScreen';
import RegistrationScreen from './src/components/RegistrationScreen';
import WelcomeScreen from './src/components/WelcomeScreen';
import CreateAccountScreen from './src/components/CreateAccountScreen';

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
});

const RootStack = createStackNavigator({
  WelcomeScreen: {
    screen: WelcomeScreen,
    navigationOptions: () => ({
      title: 'Welcome to Papery!',
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
    }),
  },
});

const AppContainer = createAppContainer(RootStack);

const App: () => React$Node = () => {
  return <AppContainer />;
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
});

export default App;
