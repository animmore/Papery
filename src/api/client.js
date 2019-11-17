const data = {}

export function sendMessage(userEmail, text, type) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      let messages = data[userEmail]

      if (!messages) {
        messages = []
      }

      const message = {
        type: type,
        text: text
      }

      messages.push(message)

      data[userEmail] = messages

      resolve([...messages])
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

