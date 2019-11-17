const data = {}

const randomMessages = ['Hello, how are you?']

export function sendMessage(userEmail, message) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      let messages = data[userEmail]

      if (!messages) {
        messages = []
      }

      messages.push(...[message, randomMessages[0]])

      data[userEmail] = messages

      resolve(messages)
    }, 1000)
  })

  return promise
}

export function getMessages(userEmail) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const messages = data[userEmail] || []

      resolve(messages)
    }, 3000)
  })

  return promise
}
