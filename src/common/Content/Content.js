import React from 'react'
import styled from 'styled-components'

const ContentContainer = styled.div`
  margin-top: 70px;
  flex: 1 0 auto;
  background: white;
  padding-bottom: 96px;
  &:before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 800px;
    width: calc(100% + 200px);
    background: #6a6cff;
    display: none;
  }
`

const Content = ({ children }) => {
  return <ContentContainer className="content">{children}</ContentContainer>
}

export { Content }
