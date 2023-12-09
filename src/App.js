import React from 'react'
import NavBar from '@common/NavBar'
import { NavigationProvider } from '@components/Route'
import LandingPage from '@pages/Landing'
import LibraryPage from '@pages/Library'
import AboutMePage from '@pages/About'

const routes = [
  {
    label: 'Home',
    path: '/',
    icon: 'SMILE',
    component: <LandingPage />,
  },
  {
    label: 'About',
    path: '/about',
    icon: 'SMILE',
    component: <AboutMePage />,
  },
  {
    label: 'Library',
    path: '/library',
    icon: 'SMILE',
    component: <LibraryPage />,
  },
]

const App = () => (
  <NavigationProvider>
    <NavBar routes={routes} />
    <LandingPage />
  </NavigationProvider>
)

export default App
