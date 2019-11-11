import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {NavigationState, NavigationScreenProp} from 'react-navigation';
import PhoneInput from 'react-native-phone-input';

type Props = {
  navigation: NavigationScreenProp<NavigationState>,
};

const RegistrationScreen = ({navigation}: Props) => {
  const handleNavigation = () => {
    navigation.navigate('CreateAccountScreen');
  };

  return (
    <View style={styles.registrationView}>
      <Text style={styles.registrationText}>Input your phone number</Text>
      <TextInput
        style={styles.inputPhoneNumber}
        placeholder="Phone Number"
        keyboardType="phone-pad"></TextInput>
      <TouchableOpacity
        style={styles.registrationBtn}
        onPress={handleNavigation}>
        <Text style={styles.registrationBtnText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  registrationView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  registrationText: {
    fontSize: 22,
  },
  inputPhoneNumber: {
    fontSize: 22,
  },
  registrationBtn: {
    marginTop: 40,
    height: 40,
    backgroundColor: 'yellow',
  },
  registrationBtnText: {
    fontSize: 22,
  },
});

export default RegistrationScreen;
