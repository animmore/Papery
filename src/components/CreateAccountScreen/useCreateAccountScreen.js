//@flow
import {useState, useCallback} from 'react'
// import ImagePicker from 'react-native-image-picker'

const useCreateAccountScreen = () => {
  const [profilePhoto, setProfilePhoto] = useState('')
  const [isProfilePhotoAdded, setIsProfilePhotoAdded] = useState(false)

  const handleChooseProfilePhoto = useCallback(() => {
    const options = {
      title: 'Select profile photo',

      noData: true,
    }

    // ImagePicker.launchImageLibrary(options, (response) => {
    //   setProfilePhoto(response.uri)
    //   setIsProfilePhotoAdded(true)
    // })
  }, [])

  return {isProfilePhotoAdded, profilePhoto, handleChooseProfilePhoto}
}

export default useCreateAccountScreen
