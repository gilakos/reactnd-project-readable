import { GET_POST } from '../actions/action_constants'

const initialState = {
  post: {}
}

export default function post (state = initialState, action) {
  const { post } = action

  switch (action.type) {
    case GET_POST :
      return {
        ...state,
        post
      }
    default:
      return state
  }
}
