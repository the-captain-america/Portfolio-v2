import React from 'react'
import styled from 'styled-components'

const HamburgerContainer = styled.div`
  margin-left: 50px;
  margin-top: 160px;
`
const MuffinTop = styled.div`
  background: #c69364;
  width: 200px;
  height: 20px;
  position: relative;
  border-radius: 8px;
  &:before {
    content: '';
    border-radius: 50% 50% 0 0;
    position: absolute;
    top: -220%;
    background: #c69364;
    height: 100px;
    width: 100%;
  }
`
const MuffinBottom = styled.div`
  background: #c69364;
  width: 100%;
  height: 24px;
  position: absolute;
  top: calc(100% + 55px);
  border-radius: 0 0 24px 24px;
`
const Lettuce = styled.div`
  background: #24bd1b;
`
const Tomato = styled.div`
  background: #f35934;
  width: 100%;
  height: 15px;
  position: absolute;
  top: 100%;
`
const Patty = styled.div`
  background: #a47367;
  min-width: calc(100% + 8px);
  padding: 8px;
  height: 20px;
  border-radius: 16px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: calc(100% + 35px);
`
const Cheese = styled.div`
  background: #f6b862;
  width: 100%;
  height: 20px;
  position: absolute;
  top: calc(100% + 15px);
`

const Hamburger = () => {
  return (
    <HamburgerContainer>
      <MuffinTop>
        <Tomato />
        <Cheese>
          <Lettuce />
        </Cheese>
        <Patty />
        <MuffinBottom />
      </MuffinTop>
    </HamburgerContainer>
  )
}

export { Hamburger }
