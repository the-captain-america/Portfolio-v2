import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  span {
    display: block;
    width: 100%;
    font-size: 14px;
    padding-top: 14px;
  }
`

const FooterInfo = ({ text1, text2, children }) => {
  return (
    <FooterContainer>
      <span>{text1}</span>
      <span>{text2}</span>
    </FooterContainer>
  )
}

export { FooterInfo }
