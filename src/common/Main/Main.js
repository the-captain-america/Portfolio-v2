import React from 'react'
import styled from 'styled-components'

const MainWrapper = styled.div`
  border: 1px solid black;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`
const Subtitle = styled.div`
  color: #6e93e8;
  font-weight: 600;
`
const Title = styled.div`
  color: #2a2b66;
  font-weight: bold;
  font-size: 28px;
  font-weight: 600;
`
const Info = styled.div`
  color: #aeaeae;
`

const Main = ({ children, ...props }) => {
  return (
    <MainWrapper>
      <Subtitle>
        <span>{props.subtitle}</span>
      </Subtitle>
      <Title>
        <span>Build websites even faster with components</span>
      </Title>
      <Info>
        <span>
          It was popularised in the 190s with the release of Letraset sheets
          containing Loren Ipsum passages, and more recently with desktoplt.
        </span>
      </Info>
      {children}
    </MainWrapper>
  )
}

export { Main }
