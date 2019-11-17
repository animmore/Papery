//@flow
export const addRegistrationData = (phoneNumber: string, password: string) => {
  return {
    type: 'REGISTRATION_DATA',
    payload: {
      phoneNumber,
      password,
    },
  }
}

export const addAuthenticationData = (phoneNumber: string, password: string) => {
  return {
    type: 'AUTHENTICATION_DATA',
    payload: {
      phoneNumber,
      password,
    },
  }
}

export const addAccountData = (firstName: string, lastName: string) => {
  return {
    type: 'SAVE_ACCOUNT_DATA',
    payload: {
      firstName,
      lastName,
    },
  }
}
