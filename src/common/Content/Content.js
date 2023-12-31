import React from 'react'
import styled from 'styled-components'
import { media } from '@utils/media'
// import { useParallax } from 'react-scroll-parallax'

const ContentContainer = styled.div`
  top: 72px;
  position: relative;
  flex: 1 0 auto;
  background: white;
  padding-bottom: 300px;

  padding-left: 16px;
  padding-right: 16px;

  ${media.sm`
    padding-left: 0;
    padding-right: 0;
  `};
`

const Content = ({ children }) => {
  return (
    <ContentContainer className="content">
      <div>
        <div className="square" />
      </div>
      {children}
    </ContentContainer>
  )
}

export { Content }
