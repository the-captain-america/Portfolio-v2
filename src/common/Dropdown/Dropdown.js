import React, { useState, useEffect, useRef, useCallback } from 'react'
import styled, { css } from 'styled-components'
import { Icon } from '@common/Icon'

const mtFn = ({ mt }) =>
  (mt || mt === 0) &&
  css`
    margin-top: ${mt}px;
  `

const mrFn = ({ mr }) =>
  (mr || mr === 0) &&
  css`
    margin-right: ${mr}px;
  `

const Wrapper = styled.div`
  position: relative;
  max-width: 360px;
  min-width: 250px;
  width: 100%;
  ${mtFn};

  &:focus-visible {
    outline: none;
    &:after {
      content: '';
      position: absolute;
      top: -4px;
      left: -4px;
      width: calc(100% + 8px);
      height: calc(100% + 8px);
      border: 2px solid #368e8c;
      border-radius: 3px;
    }
  }
`

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  width: 24px;

  ${mrFn};
`

const Header = styled.div`
  width: 100%;
  cursor: pointer;
  height: 25px;
  border: 2px solid #0148dd;
  padding: 25px;
  display: flex;
  align-items: center;
  user-select: none;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  border-radius: 4px;
  position: relative;
  &:hover {
    border: 2px solid #6583c3;
  }
  .IconContainer {
    right: 12px;
    top: 50%;
    position: absolute;
    transform: translateY(-50%);
  }
  svg {
    margin-left: auto;
    transition: transform 0.2s;
    path {
      fill: #0148dd;
    }
  }
  ${(props) =>
    props.isActive &&
    css`
      border-radius: 4px 4px 0 0;
      svg {
        transform: rotate(180deg);
      }
    `}
`

const Group = styled.ul`
  position: absolute;
  z-index: 999;
  top: 100%;
  left: 0;
  list-style: none;
  background: white;
  padding: 0;
  margin: 0;
  width: 100%;
  display: none;
  max-height: 280px;
  overflow-y: auto;
  border-radius: 0 0 8px 8px;
  box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.1);
  ${(props) =>
    props.isActive &&
    css`
      display: block;
    `}
`

const List = styled.li`
  list-style: none;
  padding: 0;
  user-select: none;
  margin: 0;
  width: 100%;
  padding: 22px;
  display: flex;
  align-items: center;
  cursor: pointer;
  span {
    line-height: 21px;
    font-size: 16px;
  }
  svg.CHECKBOX_FILLED {
    rect {
      fill: #0148dd;
      stroke: #0148dd;
    }
  }
`

const updatedArray = (selected, options) => {
  if (!options || !options.length) return []
  const result = options.map((option) => {
    if (selected.label === option.label) {
      return { ...option, ['active']: !option.active }
    } else return option
  })
  return result
}

const totalSelected = (options) => {
  if (!options || !options.length) return 0
  const result = options.filter((option) => {
    return option.active
  })
  return result.length
}

const keyCodes = {
  ENTER: 'Enter',
}

const Dropdown = ({ options, callback, name, ...props }) => {
  const ref = useRef(null)
  const iRuffu = useRef([])
  const [isOpen, setIsOpen] = useState(false)
  const [index, setActiveIndex] = useState(0)

  const escFunction = useCallback((event) => {
    if (event.key === 'Escape') {
      setIsOpen(false)
    }
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false)

    return () => {
      document.removeEventListener('keydown', escFunction, false)
    }
  }, [escFunction])

  useEffect(() => {
    const callback = (e) => {
      const target = e.target
      const wrapperRef = ref.current
      if (wrapperRef && !wrapperRef.contains(target)) {
        setIsOpen(false)
      }
    }
    const body = document.querySelector('body')
    body.addEventListener('click', callback)

    return () => {
      body.removeEventListener('click', callback)
    }
  }, [])

  iRuffu.current = options.map((option, index) =>
    iRuffu.current[index] ? iRuffu.current[index] : React.createRef(),
  )

  const optionsLength = options.length - 1 // 1 (assuming that we have 2 items in the array)

  const onKeyDown = (e) => {
    const key = e.keyCode || e.charCode
    if (key === keyCodes.ENTER || key === 13) {
      if (isOpen) {
        setIsOpen(false)
        return
      }
      setIsOpen(true)
      return
    }
    if (isOpen) {
      if (key === '40' || key === 40) {
        // what is the ?. in javascript ? it's called optional chaining
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining

        if (iRuffu && iRuffu?.current[0]) {
          iRuffu.current[0].current.focus()
        }
      }
    }
  }

  const handleSelect = (selectedOption) => {
    const payload = updatedArray(selectedOption, options)
    callback({ name, value: payload })
  }

  const renderOptions = () => {
    if (!options || !options.length) return null
    const result = options.map((option, index) => (
      <List
        key={option.label}
        onClick={() => handleSelect(option)}
        ref={iRuffu.current[index]}
        onKeyDown={(e) => console.log(e)}
        tabIndex={0}
      >
        <IconContainer mr={8}>
          <Icon name={option.active ? 'CHECKBOX_FILLED' : 'CHECKBOX'} />
        </IconContainer>
        <span>{option.label}</span>
      </List>
    ))

    return <Group isActive={isOpen}>{result}</Group>
  }

  const total = totalSelected(options)

  if (!options || !options.length) return null
  return (
    <Wrapper ref={ref} mt={props.mt} tabIndex={0} onKeyDown={onKeyDown}>
      <Header isActive={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <span>{total > 0 ? `Selected: ${total}` : 'Select'}</span>
        <IconContainer className="IconContainer">
          <Icon name="CHEVRON" />
        </IconContainer>
      </Header>
      {renderOptions()}
    </Wrapper>
  )
}

export { Dropdown }
