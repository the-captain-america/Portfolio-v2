import React, { useState, useEffect, useRef } from 'react'
import styled, { css } from 'styled-components'
import { Icon } from '@common/Icon'

// dropdown where you can only select 1 option
// the selected option is shown in the header

const Wrapper = styled.div`
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.1);
  width: 400px;
  height: 400px;
  border-radius: 24px;
  position: relative;
  background: white;
`
const DropDownContainer = styled.div`
  width: 300px;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 35px;
  padding-bottom: 35px;
`

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid #eda5c5;
  border-radius: 8px;
  padding: 8px;
`
const Input = styled.input`
  border: none;
  width: 100%;
  &:focus {
    outline: none;
  }
`

const Group = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  display: none;
  ${(props) =>
    props.isActive &&
    css`
      display: block;
    `}
`

const List = styled.li`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  padding: 16px;
  ${(props) =>
    props.isActive &&
    css`
      background: #fff3f9;
    `}
`

const Button = styled.button`
  position: absolute;
  bottom: 30px;
  right: 30px;
  background: #e05e9a;
  border: none;
  color: white;
  padding: 8px 24px 8px 24px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  span {
    font-size: 12px;
  }
  svg {
    width: 16px;
    height: 16px;
    fill: white;
  }
`

const IconContainer = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #fff0f8;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: 6px;
  margin-top: 6px;
  transition: all 0.3s ease-in-out;
  svg {
    width: 10px;
    height: 10px;
    fill: #ec94bc;
    ${(props) =>
      props.isActive &&
      css`
        transform: rotate(180deg);
      `}
  }
`
const Text = styled.div`
  padding-bottom: 3px;
  span {
    font-size: 14px;
  }
`

const MenuSearchApp = () => {
  useEffect(() => {
    document.body.style.background = '#fff3fd'

    return () => {
      document.body.style.background = null
    }
  }, [])
  const [isActive, setIsActive] = useState('')

  const foodOptions = [
    { label: 'Biriyani', active: false },
    { label: 'Butter Chicken', active: false },
    { label: 'Lamb Rogan Josh', active: false },
    { label: 'Pizza', active: false },
    { label: 'Pork Chops', active: false },
  ]

  return (
    <Search
      options={foodOptions}
      active={isActive}
      callback={({ data }) => {
        setIsActive(data)
      }}
    />
  )
}

const Search = ({ options, callback, active }) => {
  const ref = useRef()
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState('')
  const handleSelect = (option) => {
    callback({ data: option.label })
  }

  const onFocus = () => {
    if (ref.current) {
      ref.current.focus()
    }
  }

  const renderOptions = () => {
    const result = options
      .filter((option) => {
        return value.toLowerCase() === ''
          ? true
          : option.label.toLowerCase().includes(value)
      })
      .map((option) => (
        <List
          key={option.label}
          onClick={() => handleSelect(option)}
          isActive={active === option.label}
        >
          {option.label}
        </List>
      ))
    return <Group isActive={isOpen}>{result}</Group>
  }

  return (
    <Wrapper>
      <DropDownContainer>
        <Text>
          <span>Select your favorite</span>
        </Text>
        <InputContainer
          onClick={() => {
            onFocus()
            setIsOpen(!isOpen)
          }}
        >
          <Input
            ref={ref}
            onFocus={onFocus}
            placeholder="Start typing..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <IconContainer isActive={isOpen}>
            <Icon name="DOWNCHEVRON" />
          </IconContainer>
        </InputContainer>
        {renderOptions()}
      </DropDownContainer>
      <Button>
        <Icon name="CART" />
        <span> Buy</span>
      </Button>
    </Wrapper>
  )
}

export { MenuSearchApp }
