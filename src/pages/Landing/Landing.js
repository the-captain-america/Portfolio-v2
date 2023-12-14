import React, { useContext, useEffect, useState } from 'react'

import { Grid, Row, Col } from '@common/Grid'

import { Footer } from '@common/Footer'
import { Content } from '@common/Content'
import { Hero } from '@components/Hero'
import { TechRender } from '@components/TechCard'
import { Button } from '@common/Button'
import { Main } from '@common/Main'
import { TypeWriter } from '@components/TypeWriter'
import { Icon } from '@common/Icon'
import Card from '@common/Card'
import { Library } from '@components/Library'
import styled from 'styled-components'
import { NavigationContext } from '@components/Route'
import { Grogu } from '@components/Grogu'

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
  const { currentPath, navigate } = useContext(NavigationContext)

  console.log({ currentPath })

  const jumpToReleventDiv = (id) => {
    const releventDiv = document.getElementById(id)
    if (!releventDiv) return
    // behavior: "smooth" parameter for smooth movement
    releventDiv.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    if (currentPath === '/') {
      console.log('we are at home')
      jumpToReleventDiv('home')
    }
    if (currentPath === '/about') {
      console.log('we are at About')
      jumpToReleventDiv('about')
    }
    if (currentPath === '/library') {
      console.log('we are at library')
      jumpToReleventDiv('library')
    }
  }, [currentPath])

  return (
    <>
      <Content>
        <Hero>
          <Grid marginX={0}>
            <Row>
              <Col>
                <Main
                  id="home"
                  subtitle="Junior Front End Developer"
                  title="Hi my name is Vinu, welcome to my portfolio!"
                  config={{ hasTypeWriter: true }}
                >
                  <Button onClick={() => jumpToReleventDiv('library')}>
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
            <Col>
              <Main
                id="about"
                subtitle="A bit about me..."
                title="About Me"
                info={`
                    I am a frontend developer with an accounting background and
                    a strong passion for technology and coding. My main areas of
                    expertise include HTML, CSS, JavaScript, React, and Styled
                    Components. My main goal is to build top-class web
                    applications and websites.
                  `}
              >
                <TechRender />
              </Main>
            </Col>
          </Row>
        </Grid>
        <Grogu isActive={currentPath === '/library'} />
        <Grid>
          <Row>
            <Col>
              <Main
                id="library"
                subtitle="Component Library"
                title="Check out my components"
              >
                <Library className="library" />
              </Main>
            </Col>
          </Row>
        </Grid>
      </Content>
      <Footer />
    </>
  )
}

export default LandingPage
