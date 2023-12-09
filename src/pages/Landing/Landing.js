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

import styled from 'styled-components'

const IconContainer = styled.span`
  margin: 0;
  padding: 0;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
`

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
                  <Button>
                    <span>See my work</span>
                    <IconContainer>
                      <Icon
                        name="ARROW"
                        stroke="white"
                        rotate={180}
                        viewBox="-2 -1 20 20"
                      />
                    </IconContainer>
                  </Button>
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
