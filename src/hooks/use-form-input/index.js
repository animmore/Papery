import { useState } from 'react'

function useFormInput(defaultValue) {
  const [value, setValue] = useState(defaultValue)

  function onChange() {
    return (value: string) => setValue(value)
  }

  return [value, onChange]
}

export default useFormInput