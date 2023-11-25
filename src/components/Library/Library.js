import React, { useState } from 'react'
import { Toggle } from '@common/Toggle'

const Library = () => {
  const [state, setState] = useState({
    Toggle1: true,
  })

  const handleCallback = (data) => {
    setState({ [data.name]: data.value })
  }
  return (
    <Toggle value={state.Toggle1} name="Toggle1" callback={handleCallback} />
  )
}

export { Library }
