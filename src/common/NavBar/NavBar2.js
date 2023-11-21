import React, { useState } from 'react'
import styled from 'styled-components'
import { Icon } from '@common/Icon'

const Container = styled.div`
  width: 100%;
  height: 70px;
  background: grey;
  position: fixed;
  top: 0;
  z-index: 9999;
  button {
    position: absolute;
    width: 42px;
    height: 42px;
    top: 12px;
    right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    display: none;
    border: none;
    padding: 0;
    margin: 0;
  }
`

const ListItem = styled.li`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px 0px 48px 0px;
  @media (min-width: 420px) {
    padding: 0px 10px 0px 10px;
    width: 60px;
  }
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
  flex-direction: column;
  @media (min-width: 420px) {
    align-items: center;
    flex-direction: row;
    background: white;
    background: red;
  }
`

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
      <Group className="group">{renderItems()}</Group>
      <button onClick={() => setIsActive(!isActive)}>
        <Icon name="MENU" size={20} />
      </button>
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
