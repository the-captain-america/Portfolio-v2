import React, { createContext, useState } from 'react'
import { StateView } from '@common/StateView'
const Context = createContext()

const Provider = ({ children }) => {
  const [state, setState] = useState([])
  return (
    <>
      <Context.Provider value={[state, setState]}>{children}</Context.Provider>
      <StateView state={{ state }} />
    </>
  )
}

export { Provider, Context }
