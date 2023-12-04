import React, { useState } from 'react'
import { Toggle } from '@common/Toggle'
import styled from 'styled-components'
import { Row, Col } from '@common/Grid'
import { Dropdown } from '@common/Dropdown'
import { Accordion, Provider as AccordionGroup } from '@common/Accordion'
import { MenuSearchApp } from '@components/Search'
import { Tabs } from '@common/Tabs'

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

const options = [
  { label: 'label 1', id: 'label1' },
  { label: 'label 2', id: 'label2' },
]

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

  const [activeTab, setActiveTab] = useState('')

  const handleTabCallback = (data) => {
    setActiveTab(data)
  }

  const handleCallback = (data) => {
    setState({ ...state, [data.name]: data.value })
  }

  return (
    <Row>
      <Col>
        <Card title="Toggle">
          <Toggle
            className="toggle"
            value={state.toggle}
            name="toggle"
            callback={handleCallback}
          />
        </Card>
      </Col>
      <Col>
        <Card title="Toggle">
          <Tabs
            options={options}
            callback={handleTabCallback}
            active={activeTab}
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
      <Col>
        <Card title="Dropdown">
          <AccordionGroup>
            <Accordion title="Title 1" name="acc1">
              Stuff inside the accordion Stuff inside the accordion Stuff inside
              the accordion Stuff inside the accordion Stuff inside the
              accordion Stuff inside the accordio. Stuff inside the accordion
              Stuff inside the accordion Stuff inside the accordion
            </Accordion>
            <Accordion title="Title 2" name="acc2">
              Stuff inside the accordion
            </Accordion>
            <Accordion title="Title 3" name="acc3">
              Stuff inside the accordion
            </Accordion>
          </AccordionGroup>
        </Card>
      </Col>
    </Row>
  )
}

export { Library }
