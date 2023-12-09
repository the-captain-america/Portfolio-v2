import React, { useEffect, useRef, useState } from 'react'
import { TextElement } from './TypeWriter.styled'

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
