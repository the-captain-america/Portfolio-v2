import React, { useState } from 'react'
import styled from 'styled-components'
import { Icon } from '@common/Icon'

const Container = styled.div`
  width: 100%;
  height: 70px;
  background: grey;
  position: fixed;
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
    @media (max-width: 420px) {
      display: flex;
    }
  }
`

const ListItem = styled.li`
  list-style: none;
  padding: 0;
  margin: 0;
  height: 100%;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 10px 0px 10px;
  @media (max-width: 420px) {
    margin-top: 80px;
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
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 420px) {
    flex-direction: column;
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
