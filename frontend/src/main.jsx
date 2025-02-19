import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Login } from './containers/Login/index.jsx'
import { ToastContainer } from 'react-toastify'

import GlobalStyles from './styles/globalStyles.js'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
    <GlobalStyles />
    <ToastContainer autoClose={2000}theme='colored' />
  </StrictMode>,
)
