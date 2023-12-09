import React, { useEffect, useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'

const animate = () => keyframes`
  from {
    background: black;
  }
  to {
    background: white;
  }
`

const TextElement = styled.p`
  position: relative;
  line-height: 56px;
  ${(props) =>
    props.activateCursor &&
    css`
      &:after {
        content: '';
        height: 100%;
        max-height: 42px;
        width: 2px;
        top: 0;
        top: 50%;
        transform: translateY(-50%);
        animation-name: ${animate};
        animation-duration: 0.8s;
        animation-delay: 0;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        animation-timing-function: ease-out-out;
        position: absolute;
      }
    `}
`

const TypeWriter = ({ text }) => {
  const index = useRef(0)
  const [currentText, setCurrentText] = useState('')

  useEffect(() => {
    index.current = 0
    setCurrentText('')
  }, [text])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrentText((value) => value + text.charAt(index.current))
      index.current += 1
    }, 80)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [currentText, text])

  return <TextElement className="type-writer">{currentText}</TextElement>
}

export { TypeWriter }
