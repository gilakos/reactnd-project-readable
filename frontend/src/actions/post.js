import * as Api from "../utils/api"

//import relevant action constants
import {
  LOAD_POST,
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
} from './action_constants'

export const loadPost = post => ({
  type: LOAD_POST,
  post
})

//fetch posts (with id)
export const fetchPost = (id) => dispatch => (
  Api.getPost(id)
  .then(
    post => dispatch(loadPost(post))
  )
)

export function addPost( {post, category}){
  return {
    type: ADD_POST,
    post,
    category,
  }
}
export function editPost( {post, category}){
  return {
    type: EDIT_POST,
    post,
    category,
  }
}
export function removePost( {post}){
  return {
    type: DELETE_POST,
    post,
  }
}
