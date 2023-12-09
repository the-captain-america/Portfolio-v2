import React from 'react'
import NavBar from '@common/NavBar'
import { NavigationProvider, Route } from '@components/Route'
import DesignPage from '@pages/Design'
import CreativePage from '@pages/Creative'
import LandingPage from '@pages/Landing'
import LibraryPage from '@pages/Library'
import AboutMePage from '@pages/About'
import { ParallaxProvider } from 'react-scroll-parallax'
import About from '@pages/About'

const routes = [
  {
    label: 'Home',
    path: '/',
    icon: 'SMILE',
    component: <LandingPage />,
  },
  {
    label: 'About',
    path: '/About',
    icon: 'SMILE',
    component: <AboutMePage />,
  },
  {
    label: 'Creative',
    path: '/creative',
    icon: 'SMILE',
    component: <CreativePage />,
  },
  {
    label: 'Design',
    path: '/design',
    icon: 'SMILE',
    component: <DesignPage />,
  },
  {
    label: 'Library',
    path: '/library',
    icon: 'SMILE',
    component: <LibraryPage />,
  },
]

import styled from 'styled-components'
import { media } from './utils'

const GridContainer = styled.div`
  display: flex;
  background: red;
  margin-top: 150px;
  height: 800px;
  border: 16px solid orange;
  position: relative;
  &:before {
    content: 'Grid';
    position: absolute;
    top: -51px;
    left: 100px;
    padding: 8px;
    background: black;
    color: white;
  }
  div.row {
    height: 200px;
    width: 100%;
    background: green;
    display: flex;
    border: 6px solid black;
    flex-direction: column;
    ${media.sm`
      flex-direction: row;
    `};
    position: relative;
    &:before {
      content: 'Row';
      position: absolute;
      top: -35px;
      left: 0;
      padding: 8px;
      height: 32px;
      background: black;
      color: white;
    }
  }
  div.column {
    height: 200px;
    width: 100%;
    background: yellow;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    position: relative;

    &:before {
      content: 'Column';
      position: absolute;
      top: -37px;
      right: 16px;
      padding: 8px;
      background: black;
      color: white;
    }
    ${media.sm`
    background: red;
      &.sm-4 {
        width: 33%;
      }
    `};
    ${media.md`
    background: blue;
      &.md-1 {
        background: red;
        width: 8.3%;
      }
      &.md-2 {
        width: 16.6%;
      }
      &.md-3 {
        width: 25%;
      }
      &.md-4 {
        width: 33.3%;
      }
      &.md-5 {
        width: 41.6%;
      }
      &.md-6 {
        width: 50%;
      }
      &.md-8 {
        background: purple;
        width: 66.6%;
      }
      &.md-11 {
        background: purple;
        width: 91.6%;
      }
    `};
  }
  span {
    color: black;
    font-weight: 500;
    padding: 10px;
  }
`

const GridThing = () => {
  return (
    <GridContainer className="grid">
      <div className="row">
        <div className="column sm-4 md-1"></div>
        <div className="column sm-8 md-11"></div>
      </div>
    </GridContainer>
  )
}

const App = () => (
  <NavigationProvider>
    {/* <GridThing /> */}
    <ParallaxProvider>
      <NavBar routes={routes} />
      {routes.map((route) => (
        <Route path={route.path}>
          <>{route.component}</>
        </Route>
      ))}
    </ParallaxProvider>
  </NavigationProvider>
)

export default App
