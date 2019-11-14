import {React, useState} from 'react'

const useRegistrationScreen = (addRegistrationData) => {
  const [registrationData, setRegistrationData] = useState({
    phoneNumber: '',
    password: '',
  })
  const {phoneNumber, password} = registrationData

  const handleTextChanged = (key: string) => {
    return (val: string) => setRegistrationData({...registrationData, [key]: val})
  }

  const onSubmit = () => {
    addRegistrationData(phoneNumber, password)
  }

  return {phoneNumber, password, handleTextChanged, onSubmit}
}

export default useRegistrationScreen
