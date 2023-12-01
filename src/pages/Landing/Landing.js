import React, { useState } from 'react'

import { Grid, Row } from '@common/Grid'

import { Footer } from '@common/Footer'
import Card from '@common/Card'
import { Content } from '@common/Content'
import { Tabs } from '@common/Tabs'
import { TechRender } from '@components/TechCard'
import { Button } from '@common/Button'
import { Main } from '@common/Main'

const options = [
  { label: 'label 1', id: 'label1' },
  { label: 'label 2', id: 'label2' },
]

const LandingPage = () => {
  const [activeTab, setActiveTab] = useState('')

  const handleCallback = (data) => {
    setActiveTab(data)
  }

  return (
    <>
      <Content>
        <Grid marginX={0}>
          <Row>
            <Main subtitle="Component Library" title="" info="">
              <Button text="Get Started" />
            </Main>
          </Row>
          <Row>
            <Card sm={12}>
              {/* <Tabs
                options={options}
                callback={handleCallback}
                active={activeTab}
              /> */}
            </Card>
          </Row>
          <Row>
            <TechRender />
          </Row>
          <Row>
            <Main subtitle="Components" title="" info=""></Main>
          </Row>
        </Grid>
      </Content>
      <Footer />
    </>
  )
}

export default LandingPage
