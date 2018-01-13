//import relevant action constants
import {
  LOAD_POSTS,
  LOAD_POST,
  LOAD_NEW_POST,
  DELETE_POST,
  LOAD_VOTE
} from '../actions/action_constants'

const posts = (state = {}, action) => {
  const { posts, post } = action
  switch (action.type) {
    //return state and all posts
    case LOAD_POSTS:
      return {
        ...state,
        posts
      }
    //return state and add new post to posts
    case LOAD_NEW_POST:
      return {
        ...state,
        posts: state.posts.concat(post)
      }
    //return state and single post
    case LOAD_POST:
      return state.posts !== undefined
        ? {
            ...state,
            posts: state.posts.map(p => (p.id === post.id ? post : p))
          }
        : state
    //return state and filtered posts
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter( p => p.id !== post.id )
      }
    //return state and updated voteScore
    case LOAD_VOTE:
      const { id, score } = action
      if ( state.posts !== undefined ) {
        return {
          ...state,
          posts: state.posts.map((post) => {
            if (post.id === id) {
              post.voteScore = score
            }
            return post
          })
        }
      } else {
        return state
      }
    //default: return state
    default:
      return state
  }
}

export default posts
