//post actions
export const LOAD_POSTS = 'LOAD_POSTS' //get all posts
export const LOAD_POST = 'LOAD_POST' //get post
export const LOAD_NEW_POST = 'LOAD_NEW_POST' //add post
export const UPDATE_POST = 'UPDATE_POST' //edit post
export const DELETE_POST = 'DELETE_POST' //delete post

//category actions
export const LOAD_CATEGORIES = 'LOAD_CATEGORIES'
export const CURRENT_CATEGORY = 'CURRENT_CATEGORY'

//comment actions
export const LOAD_COMMENT = 'LOAD_COMMENT' //load a comment
export const LOAD_POST_COMMENTS = 'LOAD_POST_COMMENTS' //load comments by post
export const DELETE_COMMENT = 'DELETE_COMMENT' //delete comment

//vote actions
export const LOAD_VOTE = 'LOAD_VOTE' //vote post or comment

//sort actions
export const SET_SORT = 'SET_SORT' //set sorting
