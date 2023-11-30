import React, { useState } from 'react'
import { Toggle } from '@common/Toggle'
import styled from 'styled-components'
import { Row, Col } from '@common/Grid'
import { Dropdown } from '@common/Dropdown'
import { MenuSearchApp } from '@components/Search'

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    margin: 0;
    font-size: 14px;
  }
`

const CardGroup = styled.div`
  background: #f4f4f4;
  border-radius: 10px;
  padding: 16px;
`

const Card = ({ children, title }) => {
  return (
    <CardContainer className="card-container">
      <CardGroup className="card-group">{children}</CardGroup>
      <h2> {title}</h2>
    </CardContainer>
  )
}

const Library = () => {
  const [state, setState] = useState({
    toggle: true,
    dropdown: [
      { label: 'Thor', id: 1, active: false },
      { label: 'Captain America', id: 2, active: false },
      { label: 'Iron Man', id: 3, active: false },
      { label: 'Extra Item', id: 4, active: false },
      { label: 'Extra sdfsdf', id: 5, active: false },
    ],
  })

  const handleCallback = (data) => {
    setState({ ...state, [data.name]: data.value })
  }

  return (
    <Row>
      <Col>
        <Card title="Toggle">
          <Toggle
            value={state.toggle}
            name="toggle"
            callback={handleCallback}
          />
        </Card>
      </Col>
      <Col>
        <Card title="Dropdown">
          <Dropdown
            options={state.dropdown}
            callback={handleCallback}
            name="dropdown"
            mt={10}
          />
        </Card>
      </Col>
      <Row>
        <Col>
          <Card></Card>
        </Col>
      </Row>
    </Row>
  )
}

export { Library }
