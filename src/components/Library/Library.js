import React, { useState } from 'react'
import { Toggle } from '@common/Toggle'
import styled from 'styled-components'
import { Row, Col } from '@common/Grid'
import { Dropdown } from '@common/Dropdown'
import { Accordion, Provider as AccordionGroup } from '@common/Accordion'
import { Accordion2, Provider } from '@common/Accordion-v2'
import { MenuSearchApp } from '@components/Search'
import { Tabs } from '@common/Tabs'
import { Modal } from '@common/Modal'

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  h2 {
    margin: 0;
    font-size: 14px;
    margin-top: 8px;
  }
`

const CardGroup = styled.div`
  background: #f4f4f4;
  border-radius: 12px;
  padding: 16px;
  min-height: 200px;
  border: 1px solid #d1d1d1;
  box-shadow: rgba(0, 0, 0, 0.2) 1px 2px 20px 0px;
`

const Detail = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  span,
  p {
    color: rgb(174, 174, 174);
    font-size: 16px;
    line-height: 24px;
  }
  p {
    margin: 0;
  }
`

const Card = ({ children, title }) => {
  return (
    <CardContainer className="card-container">
      <CardGroup className="card-group">{children}</CardGroup>
      {title && <h2>{title}</h2>}
    </CardContainer>
  )
}

const options = [
  { label: 'Tab 1', id: '1' },
  { label: 'Tab 2', id: '2' },
  { label: 'Tab 3', id: '3' },
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

  const [activeTab, setActiveTab] = useState('1')

  const handleTabCallback = (data) => {
    setActiveTab(data)
  }

  const handleCallback = (data) => {
    setState({ ...state, [data.name]: data.value })
  }

  return (
    <>
      <Row>
        {/* <Col xs={12} sm={6}>
        <Card title="Modal">
          <Modal active={false}>Example Modal.</Modal>
        </Card>
      </Col> */}
        <Col xs={12} sm={6}>
          <Detail>
            <p>Information about the check item</p>
          </Detail>
        </Col>
        <Col xs={12} sm={6}>
          <Card>
            <Toggle
              className="toggle"
              value={state.toggle}
              name="toggle"
              callback={handleCallback}
            />
          </Card>
        </Col>
      </Row>
      <Row mt={32}>
        <Col xs={12} sm={6}>
          <Card>
            <Tabs
              options={options}
              callback={handleTabCallback}
              active={activeTab}
            />
          </Card>
        </Col>
        <Col xs={12} sm={6}>
          <Detail>
            <p>Information about the Tabs component</p>
          </Detail>
        </Col>
      </Row>
      {/* <Col xs={12} sm={6}>
        <Card title="Tabs">
         
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
        <Card title="Accordion datastructure: array">
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
      <Col xs={12} sm={6}>
        <Card title="Accordion: datastructure: object">
          <Provider>
            <Accordion2 name="acc1" title="Title 1">
              <p>This is what goes inside the accordion</p>
            </Accordion2>
            <Accordion2 name="acc2" title="Title 2">
              <p>This is what goes inside the accordion</p>
            </Accordion2>
            <Accordion2 name="acc3" title="Title 3">
              <p>This is what goes inside the accordion</p>
            </Accordion2>
          </Provider>
        </Card>
      </Col> */}
    </>
  )
}

export { Library }
