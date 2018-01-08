import React, { Component } from 'react'
import { connect } from 'react-redux'
import FormSerialize from 'form-serialize'

import CommentControls from './CommentControls'
import { updateComment } from '../actions/comments'

class CommentItem extends Component {
  state = {
    userEditing: false
  }

  editComment = () => {
    this.setState({
      userEditing: true
    })
  }

  handleCommentUpdate = ( event ) => {
    event.preventDefault();
    const serializedForm = FormSerialize(event.target, {hash: true});
    //create new comment object
    const updatedComment = {
      ...this.props.comment,
      ...serializedForm
    };
    this.props.updateComment(updatedComment).then( data => {
      this.setState({
        userEditing: false
      })
    });
  }

  cancelCommentUpdate = ( event ) => {
    event.preventDefault()
    this.setState({
      userEditing: false
    })
  }

  render() {
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

const mapStateToProps  = ({ userEditing }) => ({
  userEditing
})

export default connect(mapStateToProps, { updateComment })(CommentItem)
