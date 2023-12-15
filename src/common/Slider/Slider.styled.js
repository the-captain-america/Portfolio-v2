import styled, { css } from 'styled-components'
const SliderContainer = styled.div`
  border: 1px solid black;
  overflow: hidden;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
  max-height: 300px;
  height: 100%;
  display: flex;
  margin-top: 24px;
  position: relative;
  button.control {
    width: 30px;
    position: absolute;
    cursor: pointer;
    border: none;
    transition: all 0.3s ease-in-out;
    &:nth-child(2) {
      background: transparent;
      top: 0;
      bottom: 0;
      left: 0;
    }
    &:nth-child(3) {
      background: transparent;
      top: 0;
      bottom: 0;
      right: 0;
    }
    &:hover {
      background: rgb(0, 0, 0, 0.2);
    }
  }
`

const SliderBox = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  img {
    width: 100%;
    height: 300px;
  }
`
const Group = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  z-index: 3;
  left: 50%;
  bottom: 15px;
  transform: translateX(-50%);
  display: flex;
  flex-direction: row;
`
const Circle = styled.li`
  list-style: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: transparent;
  border: 2px solid white;
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.2);
  &:first-child {
    margin-left: 0;
  }
  margin-left: 8px;
  ${(props) =>
    props.isActive &&
    css`
      background: white;
    `};
`

const IconContainer = styled.div`
  &.right {
    transform: rotate(90deg);
  }
  &.left {
    transform: rotate(-90deg);
  }
  svg {
    g {
      path {
        fill: black;
      }
    }
  }
`
export { SliderContainer, SliderBox, Group, Circle, IconContainer }
