import React from 'react'
import styled from 'styled-components'

const MainWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 100px;
`

const Subtitle = styled.div`
  h3.subtitle {
    margin: 0;
    color: #6e93e8;
    font-weight: 600;
    line-height: 24px;
    font-size: 21px;
  }
`

const Title = styled.div`
  width: 100%;
  max-width: 600px;
  h2.title {
    margin: 0;
    text-align: center;
    color: #2a2b66;
    font-size: 44px;
    line-height: 64px;
    font-weight: 600;
  }
`

const Info = styled.div`
  width: 100%;
  max-width: 550px;
  p {
    color: #aeaeae;
    text-align: center;
    font-size: 18px;
    line-height: 32px;
    font-weight: 300;
  }
`

const Main = ({ children, ...props }) => (
  <MainWrapper>
    <Subtitle>
      <h3 className="subtitle">{props.subtitle}</h3>
    </Subtitle>
    <Title>
      <h2 className="title">Build websites even faster with components</h2>
    </Title>
    <Info>
      <p>
        It was popularised in the 190s with the release of Letraset sheets
        containing Loren Ipsum passages, and more recently with desktoplt.
      </p>
    </Info>
    {children}
  </MainWrapper>
)

export { Main }
