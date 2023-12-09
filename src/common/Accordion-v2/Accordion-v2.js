import React from 'react'
import styled, { css } from 'styled-components'
import { Context } from './Provider'
import { useContext } from 'react'
import {
  AccordionContainer,
  AccordionHeader,
  AccordionExpander,
} from './Accordion.styled'

const findNameOnObject = (state, name) => {
  const convertResults = Object.keys(state)
  if (!state || !convertResults || !convertResults.length) return false

  const results = convertResults.find((item) => {
    return item.toUpperCase().includes(name.toUpperCase())
  })

  if (!!results) {
    return true
  } else {
    return false
  }
}

// const findActiveItem = (state, name) => {
//   // returns a true or false
//   // it will be true if name === obj.name AND obj.name === true
//   const result = findNameOnObject(state, name); // true/false

//   // this checks to see if there is a name prop on the object
//   // if its true -> access name prop on the obj
//   const someVar = state[name]; // check this
//   if (someVar && result) {
//     return;
//     true;
//   } else {
//     return false;
//   }
// };
// {abc: true, abc1: true}
const Accordion2 = ({ title, name = 'acc1', children }) => {
  const [state, setState] = useContext(Context)

  // const isActive = findActiveItem(state, name);

  const handleSelect = (name) => {
    const foundResult = findNameOnObject(state, name)

    // means there is a 'acc1' on the {}

    if (foundResult) {
      // const temp = Object.keys(state);
      // const result = temp.map((item) => {
      //   return {
      //     [item]: false
      //   };
      // });
      // console.log({ result }); // [{acc1: true}{acc2: true}]
      // [['acc1', true], ['acc2', true]]

      // put the rest of the keys to be false, then change that one to toggle
      const output = Object.entries(state).reduce((prev, [key, value]) => {
        return { ...prev, [key]: false }
      }, {})
      console.log({ output })

      const newState = { ...output, [name]: !state[name] }
      return setState(newState)
    } else {
      const addToState = { ...state, [name]: true }
      return setState(addToState)
    }
  }

  console.log({ state })

  return (
    <AccordionContainer>
      <AccordionHeader onClick={() => handleSelect(name)}>
        {title}
      </AccordionHeader>
      <AccordionExpander isActive={state[name]}>{children}</AccordionExpander>
    </AccordionContainer>
  )
}

export { Accordion2 }
