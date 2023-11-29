import React, { useState, useEffect, useRef, useCallback } from 'react'
import styled, { css } from 'styled-components'
import { Icon } from '@common/Icon'

const mtFn = ({ mt }) =>
  (mt || mt === 0) &&
  css`
    margin-top: ${mt}px;
  `

const Wrapper = styled.div`
  position: relative;
  max-width: 360px;
  min-width: 300px;
  width: 100%;
  ${mtFn};
`

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  width: 24px;
  margin-right: 8px;
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
  border-radius: 3px;
  &:hover {
    border: 2px solid #6583c3;
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
      svg {
        transform: rotate(-180deg);
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
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.2);
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
  padding: 25px;
  display: flex;
  align-items: center;
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

const Dropdown = ({ options, callback, name, ...props }) => {
  const ref = useRef()

  const [isOpen, setIsOpen] = useState(false)

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
  }, [])

  const handleSelect = (selectedOption) => {
    const payload = updatedArray(selectedOption, options)
    callback({ name, value: payload })
  }

  const renderOptions = () => {
    if (!options || !options.length) return null
    const result = options.map((option) => (
      <List key={option.label} onClick={() => handleSelect(option)}>
        <IconContainer>
          {' '}
          <Icon name={option.active ? 'CHECKBOX_FILLED' : 'CHECKBOX'} />
        </IconContainer>
        <span>{option.label}</span>
      </List>
    ))

    return <Group isActive={isOpen}>{result}</Group>
  }

  const total = totalSelected(options)

  return (
    <Wrapper ref={ref} mt={props.mt}>
      <Header isActive={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <span>{total > 0 ? `Selected: ${total}` : 'Select'}</span>
        <Icon name="CHEVRON" />
      </Header>
      {renderOptions()}
    </Wrapper>
  )
}

export { Dropdown }
