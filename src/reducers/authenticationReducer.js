import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE} from '../types/types'
import {RequestStatus} from '../utils/RequestStatus'

const initialValue = {
  phoneNumber: '',
  password: '',
}

export const authentication = (
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
    case 'AUTENTICATION_DATA':
      return {
        ...state,
        ...action.payload,
      }

    default:
      return state
  }
}
