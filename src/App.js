import React from 'react'

import styled from 'styled-components'
import NavBar from '@common/NavBar'
import { NavigationProvider, Route } from '@components/Route'

import CreativePage from '@pages/Creative'
import LandingPage from '@pages/Landing'

const Container = styled.div``

const routes = [
  {
    label: 'Landing',
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

// this is a crazy situation... not bad??
// ok not too bad.. lets try this out for a bit
// ok hello is this working is this slow or not

const App = () => (
  <Container>
    <NavigationProvider>
      <NavBar routes={routes} />
      {routes.map((route) => (
        <>{route.component}</>
      ))}
    </NavigationProvider>
  </Container>
)

export default App
