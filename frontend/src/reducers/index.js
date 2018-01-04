import { combineReducers } from 'redux'
// import { routerReducer } from 'react-router-redux'

// import posts from './posts'
// import comments from './comments'
import categories from './categories'

const rootReducer = combineReducers({
  categories,
})

export default rootReducer
