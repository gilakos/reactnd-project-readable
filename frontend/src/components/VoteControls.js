import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

//import actions for vote
import { loadPost } from '../actions/post'
import { submitVote } from '../actions/vote'

import '../css/index.css'
import '../css/bootstrap-grid.css'
import '../css/bootstrap-reboot.css'
import '../css/bootstrap.css'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faThumbsDown from '@fortawesome/fontawesome-free-solid/faThumbsDown'
import faThumbsUp from '@fortawesome/fontawesome-free-solid/faThumbsUp'

class VoteControls extends Component {
  //define proptypes
  //this component can take either post or comment as object to vote on
  static propTypes = {
    entry: PropTypes.object
  }

  //handle vote event
  handleVote = (entry, voteOption) => {
    //define entry type based on if it has a parentId (post) or not (comment)
    const entryType = entry.hasOwnProperty('parentId') ? 'comments' : 'posts'
    //submit vote action
    this.props.submitVote(entryType, entry.id, voteOption)
  }

  render() {
    //extract post or comment and vote from props
    const { entry, vote } = this.props
    //get the tally of votes for this entry
    let voteTally =
      vote[entry.id] === undefined ? entry.voteScore : vote[entry.id]

    return (
      <div className="comments">
        <FontAwesomeIcon
          icon={faThumbsUp}
          onClick={() => {
            this.handleVote(entry, 'upVote')
          }}
        />{' '}
        {voteTally}{' '}
        <FontAwesomeIcon
          icon={faThumbsDown}
          onClick={() => {
            this.handleVote(entry, 'downVote')
          }}
        />
      </div>
    )
  }
}

//subscribe component state to Redux store updates
const mapStateToProps = ({ vote }, ownProps) => ({
  vote
})

//inject functions into component props
const mapDispatchToProps = {
  submitVote,
  loadPost
}

export default connect(mapStateToProps, mapDispatchToProps)(VoteControls)
