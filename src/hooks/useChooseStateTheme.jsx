import { useState, useEffect} from "react"

export const useChooseStateTheme = (key, initialState) => {
  const [state, setState] = useState(() => {
    const valueStorage = localStorage.getItem(key)

    if (valueStorage) {
      return JSON.parse(valueStorage)
    } else {
      return initialState
    }
  })

  useEffect(() => {

    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]

}