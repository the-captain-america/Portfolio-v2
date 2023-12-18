import styled, { css } from 'styled-components'

const Container = styled.div`
  margin: 32px 32px 0px 32px;
`

const ImageContainer = styled.div`
  border: 3px solid black;
  margin-top: 32px;
  margin-bottom: 32px;
  border-radius: 5px;
  overflow: hidden;
  img {
    transform: scale(1.2);
    transform-origin: 50% 50%;
  }
`
const Group = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

const List = styled.li`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: flex-start;
  padding: 16px;
  background: white;
  margin-top: 4px;
  position: relative;
  cursor: pointer;
  user-select: none;
  &:before {
    content: '';
    position: relative;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: rgb(100, 211, 108);
  }
  &:after {
    content: '';
    position: absolute;
    background: white;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    top: 21px;
    left: 21px;
    display: none;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.22);
  }
  span {
    font-weight: 700;
    margin-left: 16px;
  }
  ${(props) =>
    props.isActive &&
    css`
      &:after {
        display: block;
      }
    `}
`

export { Container, ImageContainer, Group, List }
