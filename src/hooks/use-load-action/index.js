import {useState, useEffect} from 'react'

function useLoadAction(action: function, defaultValue, ...args) {
  const [data, setData] = useState(defaultValue)

  function load() {
    action(...args).then((data) => {
      setData(data)
    })
  }

  useEffect(() => {
    load()
  }, [])

  return data
}

export default useLoadAction
