import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

//import actions for comments
import { removeComment } from '../actions/comments'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faPencilAlt from '@fortawesome/fontawesome-free-solid/faPencilAlt'
import faTrashAlt from '@fortawesome/fontawesome-free-solid/faTrashAlt'

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
    //const { comment } = this.props

    return (
      <div className="comments meta-last">
        <FontAwesomeIcon
          icon={faPencilAlt}
          onClick={() => {
            this.handleEditComment()
          }}
        />{' '}
        {' '}
        <FontAwesomeIcon
          icon={faTrashAlt}
          onClick={() => {
            this.handleDeleteComment()
          }}
        />
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
