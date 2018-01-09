import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

//import custom components
import VoteControls from './VoteControls'

//import actions for comments
import { removeComment } from '../actions/comments'

class CommentControls extends Component {
  //handle edit comment click event
  handleEditComment = () => {
    this.props.handleEditClick()
  }

  //handle delete comment click event
  handleDeleteComment = () => {
    //remove comment action
    this.props.removeComment(this.props.comment)
  }

  render() {
    //extract comment from props
    const { comment } = this.props

    return (
      <div>
        <div>
          <VoteControls entry={ comment } />
          <button
            onClick={() => {
              this.handleEditComment()
            }}
          >
            Edit
          </button>
          <button
            onClick={() => {
              this.handleDeleteComment()
            }}
          >
            Delete
          </button>
        </div>
      </div>
    )
  }
}

//subscribe component state to Redux store updates
const mapStateToProps = ({ categories }) => ({
  categories
})

//inject functions into component props
const mapDispatchToProps = {
  removeComment
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentControls))
