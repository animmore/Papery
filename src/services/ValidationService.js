//@flow
const phoneNumberRegex = RegExp(/^[0-9\-\+]{9,15}$/)
const passwordRegex = RegExp(/[a-zA-Z0-9]{6,}/)

function assert(expression, message, errors) {
  if (!expression) {
    errors.push(message)
  }
}

const ValidationService = (userRegistrationData: {phoneNumber: string, password: string}) => {
  const errors = []
  const {phoneNumber, password} = userRegistrationData

  assert(phoneNumber.match(phoneNumberRegex), 'invalid phone number', errors)
  assert(password.match(passwordRegex), 'invalid password', errors)

  return errors[0]
}

export default ValidationService
