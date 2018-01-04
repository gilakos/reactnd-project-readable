import * as Api from "../utils/api"

//import relevant action constants
import {
  ADD_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT,
} from './action_constants'

export function addComment( {post, comment}){
  return {
    type: ADD_COMMENT,
    post,
    comment,
  }
}
export function editComment( {post, comment}){
  return {
    type: EDIT_COMMENT,
    post,
    comment,
  }
}
export function removeComment( {post, comment}){
  return {
    type: DELETE_COMMENT,
    post,
    comment,
  }
}
