import styled, { css } from 'styled-components'

const Container = styled.div`
  h2 {
    span {
      padding: 8px;
      border-radius: 4px;
      background: red;
    }
  }
`
const List = styled.li`
  list-style: none;
  padding: 0;
  margin: 0;
  padding: 16px;

  ${(props) =>
    props.isActive &&
    css`
      span {
        height: 100%;
        position: relative;
        &:before {
          content: '';
          position: absolute;
          bottom: -16px;
          left: 0;
          width: 100%;
          height: 2px;
          background: black;
        }
      }
    `};
`

const Group = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
`

export { Container, List, Group }
