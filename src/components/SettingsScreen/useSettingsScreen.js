import {useSelector} from 'react-redux'

const useSettingsScreen = () => {
  const userFirstName = useSelector((state) => state.createAccountReducer.firstName)
  const userLastName = useSelector((state) => state.createAccountReducer.lastName)
  return {userFirstName, userLastName}
}

export default useSettingsScreen
