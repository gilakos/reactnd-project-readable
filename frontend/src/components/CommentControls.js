import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { removeComment } from '../actions/comments'

class CommentControls extends Component {

  handleEditComment = () => {
    //send click to props
    this.props.handleEditClick()
  }

  handleDeleteComment = () => {
    //remove the comment action
    this.props.removeComment(this.props.comment)
  }

  render() {
    //get post from props
    const { post } = this.props

    return (
      <div>
        <div>
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

const mapStateToProps = ({ categories }) => ({
  categories
})

export default withRouter(connect(null, { removeComment })(CommentControls))
