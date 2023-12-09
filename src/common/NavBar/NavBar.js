import React, { useState } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { useContext } from 'react'
import { NavigationContext } from '@components/Route'
import { Icon } from '@common/Icon'
import { Col, Grid, Row } from '@common/Grid'
import { media } from '@utils/media'

const gitImage = require('./assets/github.png')
const profileImage = require('./assets/profile.png')

const groupAppear = () => {
  return keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }`
}

const listAppear = () => {
  return keyframes`
  0% { 
    transform: translateX(400px);
  }
  50% {
    transform: translateX(-10px);
  }
  100% {
    transform: translateX(0px);
  }`
}

const Container = styled.div`
  width: 100%;
  height: 70px;
  background: white;
  position: fixed;
  top: 0;
  z-index: 9999;
  background: transparent;
  /* box-shadow: -1px 4px 6px -3px rgba(0, 0, 0, 0.19); */
  box-shadow: 0 10px 100px rgba(0, 0, 0, 0.1);
  ${media.sm`
    background: white;
  `};
  ${(props) =>
    props.isActive &&
    css`
      background: white;
      ${media.sm`
      height: 100vh;
      `};
    `};
  button.github-mobile {
    border: none;
    cursor: pointer;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    position: relative;
    background: white;
    padding: 48px 0px 48px 0px;
    animation-duration: 0.6s;
    animation-fill-mode: both;
    animation-timing-function: ease-in-out;
    animation-delay: 90ms;
    ${(props) =>
      props.isActive &&
      css`
        animation-name: ${listAppear};
      `};
    span {
      font-size: 16px;
      margin-right: 8px;
      line-height: 21px;
      color: black;
    }
    img {
      height: 24px;
    }
    ${media.xs`
        display: none;
      `};
  }
  button.github-desktop {
    background: none;
    border: none;
    cursor: pointer;
    display: none;
    background: rgb(42, 43, 102);
    border-radius: 16px;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0px;
    padding: 8px 12px;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.3s ease-in-out;

    span {
      transition: all 0.3s ease-in-out;
      font-size: 16px;
      text-align: center;
      line-height: 21px;
      color: white;
    }
    &:hover {
      background: rgb(68 69 151);
    }
    img {
      height: 24px;
    }
    ${media.xs`
      display: flex;
    `}
  }
  button.menu {
    position: absolute;
    width: 48px;
    cursor: pointer;
    height: 48px;
    top: 8px;
    right: 8px;
    display: flex;
    background: white;
    align-items: center;
    justify-content: center;
    border: none;
    padding: 0;
    margin: 0;
    ${media.xs`
      display: none;
    `};
  }
  ${media.xs`
    background: white;
  `};
`

const ListItem = styled.li`
  list-style: none;
  padding: 0;
  cursor: pointer;
  margin: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px 0px 48px 0px;
  position: relative;
  animation-duration: 0.6s;
  animation-fill-mode: both;
  animation-timing-function: ease-in-out;
  transition: all 0.3s ease-in-out;
  span {
    transition: all 0.3s ease-in-out;
    color: rgb(42, 43, 102);
  }
  &:hover {
    &:after {
      content: '';
      background: rgba(130, 130, 130, 0.2);
      width: 100%;
      height: 2px;
      position: absolute;
      bottom: 0;
    }
    span {
      color: rgba(130, 130, 130, 1);
    }
  }
  ${(props) =>
    props.isActive &&
    css`
      &:nth-child(1) {
        animation-delay: 0s;
      }
      &:nth-child(2) {
        animation-delay: 30ms;
      }
      animation-name: ${listAppear};
      span {
        font-weight: 500;
        color: rgb(42, 43, 102);
      }
    `};

  &.active {
    &:hover {
      span {
        color: #2a2b66;
      }
    }
    span {
      color: #2a2b66;
      font-weight: 500;
      font-size: 16px;
    }
  }
  ${media.xs`
    padding: 0px 20px;
    width: unset;
    transform: translateX(0px);
    height: 100%;
    &.active {
      &:after {
        content: '';
        background: #2a2b66;
        width: 100%;
        height: 2px;
        position: absolute;
        bottom: 0;
      }
    }
  `};
`

const Group = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 0px;
  overflow: hidden;
  position: relative;
  justify-content: flex-end;
  flex-direction: column;
  background: white;
  top: 70px;
  margin-right: 100px;
  animation-duration: 0.4s;
  animation-fill-mode: both;
  animation-timing-function: ease-in-out;
  ${(props) =>
    props.isActive &&
    css`
      height: 100vh;
      animation-name: ${groupAppear};
    `};
  ${media.xs`
    display: flex;
    align-items: center;
    flex-direction: row;
    height: 70px;
    top: 0;
  `};
`

const ProfileContainer = styled.div`
  border-radius: 50%;
  width: 48px;
  height: 48px;
  overflow: hidden;
  border: 2px solid rgb(42, 43, 102);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  display: none;
  ${media.xs`
    display: block;
  `};
`

const NavHeader = styled.div`
  display: flex;
  position: relative;
  top: 0;
  left: 0;
  align-items: center;
`

const Profile = () => {
  return (
    <ProfileContainer>
      <img src={profileImage} />
    </ProfileContainer>
  )
}
// 420 > =desktop
const NavBar = ({ routes }) => {
  const [isActive, setIsActive] = useState(false)
  const { currentPath, navigate } = useContext(NavigationContext)

  const handleMenu = (path) => {
    navigate(path)
    setIsActive(false)
  }

  const handleGitHub = () => {
    window.open(
      'https://github.com/vinu-codes',
      '_blank',
      'noopener,noreferrer',
    )
  }

  const renderItems = () => {
    if (!routes || !routes.length) return null
    return routes.map((route) => {
      return (
        <ListItem
          isActive={isActive}
          onClick={() => handleMenu(route.path)}
          className={currentPath === route.path ? 'active' : ''}
          key={route.label}
        >
          <span className="list-item">{route.label}</span>
        </ListItem>
      )
    })
  }

  return (
    <Container isActive={isActive} className="navbar">
      <Grid marginX={0}>
        <NavHeader>
          <Profile />
          <Group isActive={isActive} className="group">
            {renderItems()}
          </Group>
          <button onClick={handleGitHub} className="github-desktop">
            <span>Github</span>
          </button>
        </NavHeader>
        <button className="menu" onClick={() => setIsActive(!isActive)}>
          <Icon name={isActive ? 'CLOSE' : 'MENU'} stroke="black" size={26} />
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
