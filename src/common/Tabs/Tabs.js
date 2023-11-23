import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'

// heyyyyyyy
// don't forget the left: property AND the relative property on the li item
const List = styled.li`
  list-style: none;
  padding: 0;
  margin: 0;
  padding: 16px;

  ${(props) =>
    props.isActive &&
    css`
      span {
        height: 100%;
        position: relative;
        &:before {
          content: '';
          position: absolute;
          bottom: -16px;
          left: 0;
          width: 100%;
          height: 2px;
          background: black;
        }
      }
    `}

  }
`

const Group = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
`

const Tabs = ({ active, options, callback }) => {
  const [cursor, setCursor] = useState(0)
  const optionsLength = options.length - 1

  const handleKeyDown = (e, id) => {
    if (e.key === 'Enter') {
      callback(id)
    }
    if (e.keyCode === 37) {
      console.log('which arrow button was pressed? - LEFT')
    }
    // Have you pressed the RIGHT ARROW KEY AND the `cursor` state variable is less than the
    // length of the options array [{ label: 'label 1'}, { label: 'lable 2' }] (minus 1) (because arrays are 0 indexed based)
    if (e.keyCode === 39 && cursor < optionsLength) {
      console.log('which arrow button was pressed? - RIGHT')
      setCursor(cursor + 1)
    }
  }

  const renderOptions = () => {
    return options.map((item) => (
      <List
        onClick={() => callback(item.id)}
        tabIndex={0}
        key={item.id}
        onKeyDown={(e) => handleKeyDown(e, item.id)}
        isActive={active === item.id}
      >
        <span>{item.label}</span>
      </List>
    ))
  }

  return (
    <div>
      <h2>{cursor}</h2>
      <Group>{renderOptions()}</Group>
    </div>
  )
}

export { Tabs }
