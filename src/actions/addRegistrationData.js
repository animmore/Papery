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
