import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import App from './client/App'
import './client/css/index.css'

ReactDOM.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>, 
  document.getElementById('root')
)
