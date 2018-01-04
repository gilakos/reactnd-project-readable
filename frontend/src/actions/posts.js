import * as Api from "../utils/api"

//import relevant action constants
import {
  GET_POST,
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
} from './action_constants'

export const getPost = post => ({
  type: GET_POST,
  post
})

export const getPosts = () => dispatch => (
  Api.fetchPosts()
  .then(
    post => dispatch(getPost(post))
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
