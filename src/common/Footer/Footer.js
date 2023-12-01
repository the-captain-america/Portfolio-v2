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
            <FooterInfo
              items={[
                {
                  label: 'Resume',
                  icon: 'RESUME',
                  value: '/Resume',
                },
              ]}
            />
          </Col>
          <Col>
            <span>Connect</span>
            <FooterInfo
              items={[
                {
                  label: 'GitHub',
                  icon: 'GITHUB',
                  value: 'https://github.com/vinu-codes',
                },
                {
                  label: 'LinkedIn',
                  icon: 'LINKED_IN',
                  value: 'https://www.linkedin.com/in/vinujk/',
                },
              ]}
            />
          </Col>
        </Row>
      </Grid>
    </FooterContainer>
  )
}
export { Footer }
