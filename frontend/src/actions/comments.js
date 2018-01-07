import * as Api from '../utils/api'

//import relevant action constants
import {
  LOAD_COMMENT,
  LOAD_POST_COMMENTS,
  ADD_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT
} from './action_constants'

export const loadComment = comment => ({
  type: LOAD_COMMENT,
  comment
})

export const loadPostComments = (parentId, comments) => ({
  type: LOAD_POST_COMMENTS,
  parentId,
  comments
})

//fetch comments (with parent post id)
export const fetchPostComments = parentId => dispatch =>
  Api
  .getPostComments(parentId)
  .then(comments =>
    dispatch(loadPostComments(parentId, comments))
  )

export function addComment({ post, comment }) {
  return {
    type: ADD_COMMENT,
    post,
    comment
  }
}
export function editComment({ post, comment }) {
  return {
    type: EDIT_COMMENT,
    post,
    comment
  }
}
export function removeComment({ post, comment }) {
  return {
    type: DELETE_COMMENT,
    post,
    comment
  }
}
