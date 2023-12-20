import React, { useState } from 'react'
import { Group, List, Heading } from './Radio.styled'

const Radio = ({ options, value, callback, name, label }) => {
  const renderOptions = () => {
    if (!options || !options.length) return null
    const result = options.map((option) => {
      return (
        <List
          isActive={option.label === value}
          onClick={() => callback({ name: name, data: option.label })}
        >
          <span> {option.label}</span>
        </List>
      )
    })
    return <Group>{result}</Group>
  }

  return (
    <>
      {label && (
        <Heading>
          <span>{label}</span>
        </Heading>
      )}
      {renderOptions()}
    </>
  )
}

Radio.defaultProps = {
  label: 'Which radio button do you prefer?',
  callback: () => {},
  name: '',
  options: [],
}

export { Radio }
