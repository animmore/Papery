//@flow
import ValidationService from './ValidationService'

const callApi = (userRegistrationData: {phoneNumber: string, password: string}): Promise<any> => {
  return new Promise((resolve, reject) => {
    const error = ValidationService(userRegistrationData)
    console.log(userRegistrationData)
    const sendResponse = () => {
      error ? reject(error) : resolve()
    }
    setTimeout(sendResponse, 200)
  })
}

const onServerValidation = (userRegistrationData) => {
  return callApi(userRegistrationData)
}

class ServerService {
  validateUserRegistrationData(userRegistrationData: {phoneNumber: string, password: string}) {
    return onServerValidation(userRegistrationData)
  }
}

export {ServerService}
