import React, { useState } from 'react'
import { Container, ImageContainer, Group, List } from './Radio.styled'

const Radio = ({ options, value, callback, name }) => {
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
      <h3>Q3: Which radio button do you prefer?</h3>
      {renderOptions()}
    </>
  )
}

export { Radio }
