import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import App from './components/App'
import store from './store'

import './index.css'

import 'bootstrap/dist/css/bootstrap.css';

const router = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(
  router,
  document.getElementById('root')
)

registerServiceWorker()
