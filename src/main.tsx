import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import LandingPage from './Components/LandingPage.tsx'
import LoginPage from './Components/SignupPage.tsx'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App /> 
    {/* <LandingPage/>
    {/* <LoginPage/> */}
  </React.StrictMode>
)
