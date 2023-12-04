import React, { useEffect, useState, useRef } from 'react'
import styled, { css } from 'styled-components'
import { Icon } from '../Icon'

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 800px;
  height: 100%;
  max-height: 600px;

  .modal-button {
    padding: 0;
    border: none;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    outline: none;
  }
  .modal-content {
    margin-top: 16px;
    font-size: 18px;
  }
`

const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  h2 {
    line-height: 32px;
    font-size: 28px;
    margin: 0;
  }
`

const ModalButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rbga(0, 0, 0, 0.5);
`

const ModalBody = styled.div`
  &.modal-body {
    position: absolute;
    max-width: 600px;
    width: 100%;
    background: white;
    padding: 24px;
    border-radius: 8px;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 50%;
  }
`

const Modal = ({ active, title, children }) => {
  const [isActive, setIsActive] = useState(false)
  const ref = useRef(null)

  const handleClose = () => {
    setIsActive(false)
  }

  useEffect(() => {
    const handler = (event) => {
      if (!ref || !ref.current) return
      if (event.target.contains(ref.current)) {
        handleClose()
      }
    }
    document.addEventListener('click', handler, false)
    return () => {
      document.removeEventListener('click', handler, false)
    }
  }, [])

  useEffect(() => {
    if (!!active) {
      setIsActive(active)
    }
  }, [active])

  if (!isActive) return null
  return (
    <React.Fragment>
      <ModalContainer ref={ref}>
        <ModalBody className="modal-body">
          <ModalHeader className="modal-header">
            {title && <h2>{title}</h2>}
            <ModalButton onClick={handleClose} className="modal-button">
              <Icon name="CLOSE" />
            </ModalButton>
          </ModalHeader>
          <div className="modal-content">{children}</div>
        </ModalBody>
      </ModalContainer>
      <ModalOverlay />
    </React.Fragment>
  )
}

export { Modal }
