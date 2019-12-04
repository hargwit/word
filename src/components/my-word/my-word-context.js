import React, { useContext, useState } from 'react'

const MyWordContext = React.createContext()

// eslint-disable-next-line react/prop-types
const MyWordProvider = ({ children }) => {
  const [myWord, setMyWord] = useState('')

  return (
    <MyWordContext.Provider value={{ myWord, setMyWord }}>
      {children}
    </MyWordContext.Provider>
  )
}

const useMyWord = () => {
  const contextValue = useContext(MyWordContext)

  if (contextValue === undefined) {
    throw new Error('useMyWord must be used within a MyWordProvider')
  }

  return contextValue
}

export { useMyWord, MyWordProvider }
