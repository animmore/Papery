import {React, useState} from 'react'
import {addRegistrationData} from '../../actions/actions'
import {useDispatch} from 'react-redux'

const useRegistrationScreen = () => {
  const dispatch = useDispatch()

  const [registrationData, setRegistrationData] = useState({
    phoneNumber: '',
    password: '',
  })
  const {phoneNumber, password} = registrationData

  const handleTextChanged = (key: string) => {
    return (val: string) => setRegistrationData({...registrationData, [key]: val})
  }

  const onSubmit = () => {
    dispatch(addRegistrationData(phoneNumber, password))
  }

  return {phoneNumber, password, handleTextChanged, onSubmit}
}

export default useRegistrationScreen
