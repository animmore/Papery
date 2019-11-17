import {useSelector} from 'react-redux'

const useSettingsScreen = () => {
  const userPhoneNumber = useSelector((state) => state.registrationReducer.phoneNumber)
  const userFirstName = useSelector((state) => state.createAccountReducer.firstName)
  const userLastName = useSelector((state) => state.createAccountReducer.lastName)
  return {userPhoneNumber, userFirstName, userLastName}
}

export default useSettingsScreen
