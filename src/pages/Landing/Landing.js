import React from 'react'

import { Grid, Row } from '@common/Grid'

import { Footer } from '@common/Footer'
import Card from '@common/Card'
import { Content } from '@common/Content'

const LandingPage = () => (
  <>
    <Content>
      <Grid marginX={0}>
        <Row>
          <Card sm={12}>Stuff</Card>
        </Row>
      </Grid>
    </Content>
    <Footer />
  </>
)

export default LandingPage
