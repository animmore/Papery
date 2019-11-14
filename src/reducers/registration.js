//@flow
const initialValue = {
  phoneNumber: '',
  password: '',
}

export const registration = (
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
