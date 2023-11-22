import React from 'react'

import styled from 'styled-components'
import NavBar from '@common/NavBar'
import { NavigationProvider, Route } from '@components/Route'

import CreativePage from '@pages/Creative'
import LandingPage from '@pages/Landing'

const Container = styled.div`
  margin-top: 96px;
`

const routes = [
  {
    label: 'Home',
    path: '/',
    icon: 'SMILE',
    component: <LandingPage />,
  },
  {
    label: 'Creative',
    path: '/creative',
    icon: 'SMILE',
    component: <CreativePage />,
  },
]

const App = () => (
  <Container>
    <NavigationProvider>
      <NavBar routes={routes} />
      {routes.map((route) => (
        <Route path={route.path}>
          <>{route.component}</>
        </Route>
      ))}
    </NavigationProvider>
  </Container>
)

export default App
