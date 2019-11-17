const initialValue = {
  phoneNumber: '',
  password: '',
}

export const registrationReducer = (
  state: {
    phoneNumber: string,
    password: string,
  } = initialValue,
  action: {
    type: string,
    payload: {
      phoneNumber: string,
      password: string,
    },
  },
) => {
  console.log(action)
  switch (action.type) {
    case 'REGISTRATION_DATA':
      return {
        ...state,
        ...action.payload,
      }

    default:
      return state
  }
}
