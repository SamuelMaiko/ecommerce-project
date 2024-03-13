import React, { createContext, useContext, useEffect, useState } from 'react'

const GeneralContext=createContext()
export const useMyGeneralContext=()=> useContext(GeneralContext)


const AppContext = ({children}) => {
  const [cartTotal, setCartTotal] = useState(0)
  const [increase, setIncrease] = useState(0)
  const [cartNumber, setCartNumber] = useState(0)

  useEffect(()=>{
    setCartTotal((current)=>current+increase)
  },[increase])
  return (
    <GeneralContext.Provider value={{cartTotal, setCartTotal, setIncrease, cartNumber, setCartNumber}}>
        {children}
    </GeneralContext.Provider>
  )
}

export default AppContext