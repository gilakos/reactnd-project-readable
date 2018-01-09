import React, { Component } from 'react'
import { connect } from 'react-redux'
import FormSerialize from 'form-serialize'

//import custom components
import CommentControls from './CommentControls'

//import actions for comments
import { updateComment } from '../actions/comments'

class CommentItem extends Component {
  //define state for if user is editing the comment
  state = {
    userEditing: false
  }

  //handle edit comment state change
  editComment = () => {
    this.setState({
      userEditing: true
    })
  }

  //handle update comment event
  handleCommentUpdate = ( event ) => {
    event.preventDefault();
    //serialize text from form
    const serializedForm = FormSerialize(event.target, {hash: true});
    //create updated comment object
    const updatedComment = {
      ...this.props.comment,
      //unpack form
      ...serializedForm
    }
    //update comment action
    this.props.updateComment(updatedComment).then( data => {
      //reset the editing state
      this.setState({
        userEditing: false
      })
    })
  }

  //handle cancel update event
  cancelCommentUpdate = ( event ) => {
    event.preventDefault()
    //reset the editing state
    this.setState({
      userEditing: false
    })
  }

  render() {
    //extract comment from props
    const { comment } = this.props

    return (
      // if the comment is being edited show form, otherwise render comment
      this.state.userEditing ? (
        <li key={comment.id}>
          <form
            onSubmit={this.handleCommentUpdate}
            ref={commentForm => (this.commentForm = commentForm)}
          >
            <div>
              <input
                type="text"
                name="author"
                placeholder="Your name"
                defaultValue={comment.author}
                required
              />
            </div>
            <div>
              <textarea
                name="body"
                rows="2"
                placeholder="Your comment"
                defaultValue={comment.body}
                required
              />
            </div>
            <button
              onClick={this.cancelCommentUpdate}
              >Cancel</button>
            <button>Save</button>
          </form>
        </li>
      ) : (
        <li key={comment.id}>
          <h5> Author: {comment.author} </h5>
          <p> {comment.body} </p>
          <CommentControls comment={comment} handleEditClick={this.editComment} />
        </li>
      )
    )
  }
}

//subscribe component state to Redux store updates
const mapStateToProps  = ({ userEditing }) => ({
  userEditing
})

//inject functions into component props
const mapDispatchToProps = {
  updateComment
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentItem)
