import { combineReducers } from 'redux'
// import { routerReducer } from 'react-router-redux'

// import comments from './comments'
import categories from './categories'
import posts from './posts'
import post from './post'

const rootReducer = combineReducers({
  categories,
  posts,
  post,
})

export default rootReducer
