import React from 'react'
import styled, { css } from 'styled-components'
import { Grid } from '@common/Grid'

const FooterContainer = styled.div`
  flex-shrink: 0;
  background: #424242;
  padding: 24px;
  span {
    color: white;
    font-weight: 600;
  }
`

const Footer = () => {
  return (
    <FooterContainer className="footer">
      <Grid>
        <span>Footer</span>
      </Grid>
    </FooterContainer>
  )
}
export { Footer }
