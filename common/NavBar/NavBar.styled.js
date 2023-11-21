import styled, { css } from 'styled-components'

const pushDownMargin = '72px'

const NavContainer = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
  position: fixed;
  button.menu {
    position: absolute;
    right: 0;
    top: 12px;
    height: 48px;
    width: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    padding: 0;
    margin: 0;
    border: none;
    display: none;
    @media (max-width: 420px) {
      display: flex;
    }
  }
`

const Group = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  height: ${pushDownMargin};
  background: white;
  width: 100%;
  border-bottom: 3px solid black;

  @media (max-width: 420px) {
    height: ${pushDownMargin};
    overflow: hidden;
    flex-direction: column;
    li {
      &:first-of-type {
        margin-top: ${pushDownMargin};
      }
    }
  }

  ${(props) =>
    props.isActive &&
    css`
      @media (max-width: 420px) {
        height: 100vh;
        li {
          justify-content: center;
          width: 100%;
        }
      }
    `}

  li {
    list-style: none;
    margin: 0;
    padding: 0;
    height: 72px;
    display: flex;
    align-items: center;
    padding: 20px;
    &.active {
      font-weight: 600;
    }
  }
`

export { NavContainer, Group }
