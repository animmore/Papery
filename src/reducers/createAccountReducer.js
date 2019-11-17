import {
  CREATE_ACCOUNT_REQUEST,
  CREATE_ACCOUNT_SUCCESS,
  CREATE_ACCOUNT_FAILURE,
  SAVE_ACCOUNT_DATA,
} from '../types/types'

const initialState = {
  firstName: '',
  lastName: '',
}

export const createAccountReducer = (
  state: {
    firstName: string,
    lastName: string,
  } = initialState,
  action: {
    type: string,
    payload: {
      firstName: string,
      lastName: string,
    },
  },
) => {
  switch (action.type) {
    case CREATE_ACCOUNT_REQUEST:
      return {
        ...state,
        requestStatus: RequestStatus.Request,
      }
    case CREATE_ACCOUNT_SUCCESS:
      return {
        ...state,
        requestStatus: RequestStatus.Success,
      }
    case CREATE_ACCOUNT_FAILURE:
      return {
        ...state,
        requestStatus: RequestStatus.Failure,
      }
    case SAVE_ACCOUNT_DATA:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}
