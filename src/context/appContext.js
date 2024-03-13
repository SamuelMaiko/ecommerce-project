import React, { createContext, useContext } from 'react'

const GeneralContext=createContext()
export const useMyGeneralContext=()=> useContext(GeneralContext)


const appContext = ({children}) => {
  return (
    <GeneralContext.Provider value={{}}>
        {children}
    </GeneralContext.Provider>
  )
}

export default appContext