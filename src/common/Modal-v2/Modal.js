import React, { useEffect } from 'react'
import styled from 'styled-components'
import { usePortal as Portal } from '@hooks/usePortal'

const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  max-width: 600px;
  width: 100%;
  border-radius: 10px;
  border: 1px solid black;
  z-index: 2;
  overflow: hidden;
`
const Content = styled.div`
  padding: 30px;
  margin-bottom: 48px;
`

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: grey;
  border-top: 2px solid black;
  button {
    background: black;
    color: white;
    border: none;
    height: 48px;
    width: 70px;
  }
`
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: lightgrey;
  width: 100vw;
  height: 100vh;
  opacity: 0.85;
`

const Modal = ({ title, children, actions = [], callback }) => {
  useEffect(() => {
    const body = document.querySelector('body')
    body.style.setProperty('overflow', 'hidden')

    return () => {
      body.style.setProperty('overflow', 'unset')
    }
  }, [])
  const handleClose = () => {
    callback('CLOSED')
  }
  const handleAction = (action) => {
    callback(action)
  }
  const renderActions = () => {
    if (!actions || !actions.length) return null
    const result = actions.map((item) => {
      return (
        <button onClick={() => handleAction(item.action)}>{item.label}</button>
      )
    })
    return result
  }

  return (
    <Portal selector="modal">
      <ModalContent className="content">
        <Content>
          <h1>{title}</h1>
          {children}
        </Content>
        <Footer>{renderActions()}</Footer>
      </ModalContent>
      <Overlay onClick={handleClose} className="overlay"></Overlay>
    </Portal>
  )
}

export { Modal }
