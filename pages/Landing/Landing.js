import React from 'react'

import { Grid, Row } from '@common/Grid'
import Toaster from '@components/Toaster'
import Kettle from '@components/Kettle'

import Cup from '@components/Cup'
import Card from '@common/Card'

const LandingPage = () => (
  <Grid>
    <Row>
      <Card sm={12}>
        <Toaster />
      </Card>
    </Row>
    <Row>
      <Card>
        <Kettle />
      </Card>
      <Card>
        <Cup />
      </Card>
    </Row>
  </Grid>
)

export default LandingPage
