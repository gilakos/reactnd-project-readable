export const ADD_POST = 'ADD_POST' //add post
export const EDIT_POST = 'EDIT_POST' //edit post
export const REMOVE_POST = 'REMOVE_POST' //delete post
export const ADD_COMMENT = 'ADD_COMMENT' //add comment
export const EDIT_COMMENT = 'EDIT_COMMENT' //edit comment
export const REMOVE_COMMENT = 'REMOVE_COMMENT' //delete comment

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
    type: REMOVE_POST,
    post,
  }
}
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
    type: REMOVE_COMMENT,
    post,
    comment,
  }
}
