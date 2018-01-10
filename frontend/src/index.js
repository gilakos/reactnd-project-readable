import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

//import custom components - Main App and Redux Store
import App from './components/App'
import store from './store'

//import styles
// import './index.css'
// import 'bootstrap/dist/css/bootstrap.css'

const router = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(router, document.getElementById('root'))
