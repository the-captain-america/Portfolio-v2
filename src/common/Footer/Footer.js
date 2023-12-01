import React from 'react'
import styled, { css } from 'styled-components'
import { Grid, Row, Col } from '@common/Grid'
import { FooterInfo } from './FooterInfo'

const FooterContainer = styled.div`
  flex-shrink: 0;
  background: #424242;
  padding: 36px;
  span {
    color: white;
    font-weight: 600;
  }
`

const Footer = () => {
  return (
    <FooterContainer className="footer">
      <Grid marginX={0}>
        <Row>
          <Col>
            <span>Home</span>
            <FooterInfo text1="About Me" text2="Resume" />
          </Col>
          <Col>
            <span>Connect</span>
            <FooterInfo text1="GitHub" text2="LinkedIn" />
          </Col>
          <Col>
            <span>Contact</span>
            <FooterInfo text1="vinujithmin@gmail.com" icon="" />
          </Col>
        </Row>
      </Grid>
    </FooterContainer>
  )
}
export { Footer }
