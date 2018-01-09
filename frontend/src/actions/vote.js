import * as Api from '../utils/api'

//import relevant action constants
import {
  LOAD_VOTE,
} from './action_constants'

//load vote actions
export const loadVote = (id, score) => ({
  type: LOAD_VOTE,
  id,
  score,
})

//submit a vote to server
export const submitVote = (objectType, id, vote) => dispatch => (
  Api
  .postVote(objectType, id, vote)
  .then(data => dispatch(loadVote(id, data.voteScore)))
)
