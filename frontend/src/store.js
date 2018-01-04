import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// import logger from 'redux-logger'

//import root reducers
import rootReducer from './reducers/index'

//define the enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

//create the store
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
)

//add hot reloading for non-component updates
if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default
    store.replaceReducer(nextRootReducer)
  })
}

export default store
