import React, { useState } from 'react'

import { Grid, Row } from '@common/Grid'

import { Footer } from '@common/Footer'
import { Content } from '@common/Content'
import Card from '@common/Card'
import { Library } from '@components/Library'

const LibraryPage = () => {
  return (
    <>
      <Content>
        <Grid marginX={0}>
          <Row>
            <Card sm={12}>
              <Library className="library" />
            </Card>
          </Row>
        </Grid>
      </Content>
      <Footer />
    </>
  )
}

export default LibraryPage
