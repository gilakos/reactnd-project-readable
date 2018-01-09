import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { submitVote } from '../actions/vote'

class VoteControls extends Component {
  static propTypes = {
    entry: PropTypes.object
  }

  handleVote = (entry, voteOption) => {
    //handle vote with options
    //define entry type based on if it has a parentId (post) or not (comment)
    const entryType = entry.hasOwnProperty('parentId') ? 'comments' : 'posts'
    this.props.submitVote(entryType, entry.id, voteOption)
  }

  render() {
    //get post or comment and vote from props
    const { entry, vote } = this.props
    let voteTally = (vote[entry.id] === undefined) ? entry.voteScore : vote[entry.id]


    return (
      <div>
        <div>
          <button
            onClick={() => {
              this.handleVote(entry, 'upVote')
            }}
          >
            Up Vote
          </button>
          <span>{voteTally}</span>
          <button
            onClick={() => {
              this.handleVote(entry, 'downVote')
            }}
          >
            Down Vote
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ vote }) => ({
  vote
})

export default withRouter(connect(mapStateToProps, { submitVote })(VoteControls))
