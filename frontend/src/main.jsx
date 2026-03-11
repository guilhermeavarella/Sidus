import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './global.css'

import Intro from './Intro.jsx'
import App from './App.jsx'
import InitialLoad from './pages/InitialLoad.jsx'
import Welcome from './pages/Welcome.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Intro />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      // Authentication routes
      { path: "load", element: <InitialLoad />, },
      { path: "welcome", element: <Welcome />, },
      { path: "login", element: <Login />, },
      { path: "register", element: <Register />, },


      // App routes 
      { path: "home", element: <Home />, },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)