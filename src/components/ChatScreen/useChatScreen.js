import {useState, useEffect, useCallback} from 'react'

const useChatScreen = () => {
  const [textInput, setTextInput] = useState('')

  const handleTextInput = useCallback(() => {
    return (val: string) => setTextInput(val)
  }, [])

  return {handleTextInput, textInput}
}

export default useChatScreen
