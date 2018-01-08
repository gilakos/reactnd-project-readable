import * as Api from '../utils/api'

//import relevant action constants
import {
  LOAD_COMMENT,
  LOAD_POST_COMMENTS,
  DELETE_COMMENT
} from './action_constants'

//load comment action
export const loadComment = comment => ({
  type: LOAD_COMMENT,
  comment
})

//load all comments action
export const loadPostComments = (parentId, comments) => ({
  type: LOAD_POST_COMMENTS,
  parentId,
  comments
})

//fetch comments (with parent post id) from server
export const fetchPostComments = parentId => dispatch =>
  Api.getPostComments(parentId).then(comments =>
    dispatch(loadPostComments(parentId, comments))
  )

//add new comment to server
export const addNewComment = (comment) => dispatch =>
  Api
  .postNewComment(comment)
  .then(data => dispatch(loadComment(data)))

//delete comment action
export const deleteComment = comment => ({
  type: DELETE_COMMENT,
  comment
})

//delete comment from server
export const removeComment = ( comment ) => dispatch => (
  Api
    .deleteComment(comment.id)
    .then(dispatch(deleteComment(comment)))
)

//update comment on server
export const updateComment = ( comment ) => dispatch => (
  Api
    .putUpdateComment(comment)
    .then(dispatch(loadComment(comment)))
)
