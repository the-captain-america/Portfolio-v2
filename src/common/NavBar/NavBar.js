import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { Icon } from '@common/Icon'
import { Grid } from '@common/Grid'
import { media } from '@utils/media'

const Container = styled.div`
  width: 100%;
  height: 70px;
  background: grey;
  position: fixed;
  top: 0;
  z-index: 9999;
  ${media.xs`
    background: white;
  `};
  }

  button {
    position: absolute;
    width: 42px;
    height: 42px;
    top: 12px;
    right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    padding: 0;
    margin: 0;
    ${media.xs`
    display: none;
    `}
  }
`

const ListItem = styled.li`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px 0px 48px 0px;
  ${media.xs`
    padding: 0px 10px 0px 10px;
    width: unset;
  `};
  &.active {
    font-weight: 600;
  }
`

const Group = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  flex-direction: column;
  background: white;
  top: 70px;
  display: none;
  ${media.xs`
    display: flex;
  `};
  ${(props) =>
    props.isActive &&
    css`
      display: flex;
      ${media.xs`
        display: flex;
      `}
    `}
  ${media.xs`
    align-items: center;
    flex-direction: row;
    height: 70px;
    top: 0;
  `}
  }
`
// 420 > =desktop
const NavBar = ({ routes }) => {
  const [isActive, setIsActive] = useState(false)
  const [currentPath, navigate] = useState('/')

  const handleMenu = (path) => {
    navigate(path)
  }

  const renderItems = () => {
    if (!routes || !routes.length) return null
    return routes.map((route) => {
      return (
        <ListItem
          onClick={() => navigate(route.path)}
          className={route.path === currentPath ? 'active' : ''}
          key={route.label}
        >
          {route.label}
        </ListItem>
      )
    })
  }

  return (
    <Container className="container">
      <Grid marginX={0}>
        <Group isActive={isActive} className="group">
          {renderItems()}
        </Group>
        <button onClick={() => setIsActive(!isActive)}>
          <Icon name="MENU" size={20} />
        </button>
      </Grid>
    </Container>
  )
}

NavBar.defaultProps = {
  routes: [
    { label: 'Home', path: '/' },
    { label: 'Creative', path: '/creative' },
  ],
}

export default NavBar
