import * as Api from "../utils/api"

//import relevant action constants
import {
  LOAD_POSTS,
} from './action_constants'

export const loadPosts = posts => ({
  type: LOAD_POSTS,
  posts
})

//fetch all posts (with filter)
export const fetchPosts = (category_filter) => dispatch => (
  Api.getPosts(category_filter)
  .then(
    post => dispatch(loadPosts(post))
  )
)
