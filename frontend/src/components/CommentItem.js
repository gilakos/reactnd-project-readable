import React, { Component } from 'react'
import { connect } from 'react-redux'
import FormSerialize from 'form-serialize'

//import custom components
import CommentControls from './CommentControls'
import VoteControls from './VoteControls'

//import actions for comments
import { updateComment } from '../actions/comments'

//import helper function
import { fromNow } from '../utils/helpers'

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
          <div className="add-comment" key={comment.id}>
            <header>
              <h3 className="h6">Leave a reply</h3>
            </header>
            <form
              onSubmit={this.handleCommentUpdate}
              ref={commentForm => (this.commentForm = commentForm)}
              className="commenting-form">
              <div className="row">
                <div className="form-group col-md-12">
                  <input
                    className="form-control"
                    type="text"
                    name="author"
                    placeholder="Your name"
                    defaultValue={comment.author}
                    required
                  />
                </div>
                <div className="form-group col-md-12">
                  <textarea
                    className="form-control"
                    name="body"
                    rows="3"
                    placeholder="Your comment"
                    defaultValue={comment.body}
                    required
                  />
                </div>
                <div className="form-group col-md-12">
                  <button
                    onClick={this.cancelCommentUpdate}
                    className="btn btn-secondary"
                    style={{margin: "0px 5px 0px 0px"}}
                    >Cancel</button>
                  <button
                    className="btn btn-secondary"
                    >Save</button>
                </div>
              </div>
            </form>
          </div>
      ) : (
        <div className="comment" key={comment.id}>
          <div className="comment-header d-flex justify-content-between">
            <div className="user d-flex align-items-center">
              <div className="title">
                <strong>{comment.author}</strong><span className="date">{fromNow(comment.timestamp)}</span>
              </div>
            </div>
          </div>
          <div className="comment-body">
            <p>
              {comment.body}
            </p>
            <footer
              className="post-footer d-flex align-items-center"
              style={{ fontSize: '.85rem' }}
              >
                <VoteControls entry={comment} />
                <CommentControls comment={comment} handleEditClick={this.editComment} />
              </footer>
          </div>
        </div>
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
