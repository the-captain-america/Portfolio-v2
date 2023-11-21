import React, { useContext, useState } from 'react'
import { NavigationContext } from '@components/Route'
import { Group, NavContainer } from './NavBar.styled'
import { Icon } from '@common/Icon'

const NavBar = ({ routes }) => {
  const [isActive, setIsActive] = useState(false)

  // const { currentPath, navigate } = useContext(NavigationContext)

  // const currentPath = '/creative'

  const [currentPath, navigate] = useState('/creative')

  const handleMenu = (path) => {
    navigate(path)
    setIsActive(false)
  }

  const renderItems = () => {
    if (!routes || !routes.length) return null
    return routes.map((curr) => (
      <li
        onClick={() => handleMenu(curr.path)}
        className={currentPath === curr.path ? 'active' : ''}
        key={curr.label}
      >
        {curr.label}
      </li>
    ))
  }

  return (
    <NavContainer>
      <button onClick={() => setIsActive(!isActive)} className="menu">
        {/* <Icon name="MENU" size={20} /> */}
      </button>
      <Group isActive={isActive}>{renderItems()}</Group>
    </NavContainer>
  )
}

NavBar.defaultProps = {
  routes: [{ label: 'Home' }],
}

export default NavBar
