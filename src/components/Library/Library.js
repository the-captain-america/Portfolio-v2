import React, { useState } from 'react'
import { Toggle } from '@common/Toggle'
import styled from 'styled-components'
import { Row, Col } from '@common/Grid'
import { Dropdown } from '@common/Dropdown'
import { Accordion, Provider as AccordionGroup } from '@common/Accordion'
import { Accordion2, Provider } from '@common/Accordion-v2'
import { MenuSearchApp } from '@components/Search'
import { Tabs } from '@common/Tabs'
import { Modal } from '@common/Modal-v2'
import { CardContainer, CardGroup, Detail } from './Library.styled'
import { Slider } from '@common/Slider'
import { CAR1, CAR2, CAR3, CAR4 } from '@common/Slider'
import { Slider2 } from '@common/Slider/Slider-v2'
import { Radio } from '@common/Radio'

const Card = ({ children, title }) => {
  return (
    <CardContainer className="card-container">
      <CardGroup className="card-group">{children}</CardGroup>
      {title && <h2>{title}</h2>}
    </CardContainer>
  )
}

const IMAGES = [
  { url: CAR1, id: 1 },
  { url: CAR2, id: 2 },
  { url: CAR3, id: 3 },
  { url: CAR4, id: 4 },
]
const radioOptions = [
  { label: 'Option 1', value: 'A', id: 'A' },
  { label: 'Option 2', value: 'B', id: 'B' },
  { label: 'Option 3', value: 'C', id: 'C' },
  { label: 'Option 4', value: 'D', id: 'D' },
]

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
    radio: '',
  })

  const [activeTab, setActiveTab] = useState('1')
  const [showModal, setShowModal] = useState(false)

  const handleModal = (action) => {
    if (action === 'CLOSED') {
      setShowModal(false)
    }
    if (action === 'CANCEL') {
      setShowModal(false)
    }
    if (action === 'ACCEPT') {
      setShowModal(false)
    }
  }

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
      <Row mt={32}>
        <Col xs={12} sm={6}>
          <Detail>
            <p>Information about the Tabs component</p>
          </Detail>
        </Col>
        <Col xs={12} sm={6}>
          <Card>
            <button onClick={() => setShowModal(true)}>Open Modal</button>
          </Card>
        </Col>
      </Row>
      <Row mt={32}>
        <Col xs={12} sm={6}>
          <Card>
            <Dropdown
              options={state.dropdown}
              name="dropdown"
              callback={({ name, value }) => {
                setState({ ...state, [name]: value })
              }}
            />
          </Card>
        </Col>
        <Col xs={12} sm={6}>
          <Detail>
            <p>Information about the Dropdown component</p>
          </Detail>
        </Col>
      </Row>
      <Row mt={32}>
        <Col xs={12} sm={6}>
          <Detail>
            <p>Information about the Radio Button component</p>
          </Detail>
        </Col>
        <Col xs={12} sm={6}>
          <Card>
            <Radio
              name="radio"
              options={radioOptions}
              value={state.radio}
              callback={({ name, data }) => {
                setState({ ...state, [name]: data })
              }}
            />
          </Card>
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
      <Row>
        <Slider images={IMAGES} />
      </Row>
      <Row>
        <Slider2 images={IMAGES} />
      </Row>
      {showModal && (
        <Modal
          title="Modal"
          callback={handleModal}
          actions={[
            { label: 'Cancel', action: 'CANCEL' },
            { label: 'Accept', action: 'ACCEPT' },
          ]}
        >
          <p>This is important text inside the modal</p>
        </Modal>
      )}
    </>
  )
}

export { Library }
