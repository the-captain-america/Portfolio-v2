import React from 'react'

import { Grid, Row } from '@common/Grid'
import Toaster from '@components/Toaster'
import Kettle from '@components/Kettle'

import Cup from '@components/Cup'
import Card from '@common/Card'

// we have so many toasters lol
// what happens if theres 2 default exports from two separate files?
// which one does the index export? when {default} is used

const CreativePage = () => (
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

export default CreativePage
