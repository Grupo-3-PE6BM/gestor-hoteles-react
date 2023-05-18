import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRouter } from './AppRouter'
import { BrowserRouter } from 'react-router-dom'
import { isUserAuthenticated } from '../src/login/helpers/loginHelper'
import './style.css'
import './profileStyle.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    
  <BrowserRouter>
    <div className={isUserAuthenticated() ? 'main-content' : null}></div>
    <AppRouter />
  </BrowserRouter>

)