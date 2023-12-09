import React, { useState } from 'react'

import { Grid, Row, Col } from '@common/Grid'

import { Footer } from '@common/Footer'
import Card from '@common/Card'
import { Content } from '@common/Content'
import { Hero } from '@components/Hero'
import { TechRender } from '@components/TechCard'
import { Button } from '@common/Button'
import { Main } from '@common/Main'
import { TypeWriter } from '@components/TypeWriter'
import { Icon } from '@common/Icon'

const options = [
  { label: 'label 1', id: 'label1' },
  { label: 'label 2', id: 'label2' },
]

const LandingPage = () => {
  // const [activeTab, setActiveTab] = useState('')

  // const handleCallback = (data) => {
  // setActiveTab(data)

  return (
    <>
      <Content>
        <Hero>
          <Grid marginX={0}>
            <Row>
              <Col>
                <Main
                  subtitle="Junior Front End Developer"
                  title="Hi my name is Vinu, welcome to my portfolio!"
                  config={{ hasTypeWriter: true }}
                >
                  <Button text="See my work" />
                  <Icon name="ARROW" />
                </Main>
              </Col>
            </Row>
          </Grid>
        </Hero>
        <Grid>
          <Row>
            <TechRender />
          </Row>
          <Row>
            <Col>
              <Main subtitle="Components" title="" info=""></Main>
            </Col>
          </Row>
        </Grid>
      </Content>
      <Footer />
    </>
  )
}

export default LandingPage
