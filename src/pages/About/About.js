import React from 'react'
import { Content } from '@common/Content'
import { Grid, Row } from '@common/Grid'
import { Main } from '@common/Main'

const aboutMeInfo = (
  <p>
    I am a frontend developer with an accounting background and a strong passion
    for technology and coding. My main areas of expertise include HTML, CSS,
    JavaScript, React, and Styled Components. My main goal is to build top-class
    web applications and websites.
  </p>
)

const AboutMePage = () => {
  return (
    <Content>
      <Grid>
        <Row>
          <Main
            subtitle="A bit about me..."
            title="About Me"
            info={aboutMeInfo}
          ></Main>
        </Row>
      </Grid>
    </Content>
  )
}

export default AboutMePage
