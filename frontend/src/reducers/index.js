import { combineReducers } from 'redux'
// import { routerReducer } from 'react-router-redux'

import categories from './categories'
import posts from './posts'
import post from './post'
import comments from './comments'
import vote from './vote'
import sort from './sort'

const rootReducer = combineReducers({
  categories,
  posts,
  post,
  comments,
  vote,
  sort,
})

export default rootReducer
