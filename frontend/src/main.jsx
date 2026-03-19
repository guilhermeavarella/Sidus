import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './global.css'

import Intro from './Intro.jsx'
import Emulator from './Emulator.jsx'
import App from './App.jsx'
import InitialLoad from './pages/InitialLoad.jsx'
import Welcome from './pages/Welcome.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Home from './pages/Home.jsx'
import Account from './pages/Account.jsx'
import Services from './pages/Services.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Intro />,
  },

  {
    path: "/",
    element: <Emulator />,
    children: [
      // Authentication routes
      { path: "load", element: <InitialLoad />, },
      { path: "welcome", element: <Welcome />, },
      { path: "login", element: <Login />, },
      { path: "register", element: <Register />, },

      // App routes
      { path: "app", 
        element: <App />,
        children: [
          { path: "home", element: <Home />, },
          { path: "account", element: <Account />, },
          
          { path: "services", element: <Services />, }
        ]
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)