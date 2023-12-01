import React from 'react'
import styled from 'styled-components'

const ButtonComponent = styled.button`
  border: none;
  cursor: pointer;
  background: #6a6cff;
  color: white;
  padding: 12px 14px 12px 14px;
  border-radius: 26px;
  border: 2px solid transparent;
  transition: all 0.2s ease-in;
  &:hover {
    color: #6a6cff;
    background: white;
    border: 2px solid #6a6cff;
  }
`

const Button = ({ text }) => {
  return <ButtonComponent>{text}</ButtonComponent>
}

export { Button }
