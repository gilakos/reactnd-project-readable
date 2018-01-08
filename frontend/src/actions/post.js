import * as Api from "../utils/api"

//import relevant action constants
import {
  LOAD_POST,
  LOAD_NEW_POST,
  // ADD_POST,
  // EDIT_POST,
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

export const loadNewPost = post => ({
  type: LOAD_NEW_POST,
  post
})

//add new post
export const addNewPost = ( post ) => dispatch => (
  Api.postNewPost(post)
    .then(post => dispatch(loadNewPost(post)))
)

// export function editPost( {post, category}){
//   return {
//     type: EDIT_POST,
//     post,
//     category,
//   }
// }
export const deletePost = post => ({
    type: DELETE_POST,
    post,
})

export const removePost = (post ) => dispatch => (
  Api.deletePost(post.id)
    .then(dispatch(deletePost(post)))
)
