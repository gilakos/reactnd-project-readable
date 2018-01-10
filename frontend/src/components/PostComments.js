import React, { Component } from 'react'

//import custom components
import CommentItem from './CommentItem'

class PostComments extends Component {
  //handle form submission event
  handleCommentSubmit = event => {
    event.preventDefault()
    //send event to props function to add new comment
    this.props.onAddNewComment(event)
    //reset the comment form when done
    this.commentForm.reset()
  }

  render() {
    //extract comment from props
    const { comments } = this.props

    return (
      <div>
        { comments.map(comment => (
          <CommentItem key={comment.id} comment={comment} />
        ))}

        <div className="add-comment">
          <header>
            <h3 className="h6">Leave a reply</h3>
          </header>
          <form
            onSubmit={this.handleCommentSubmit}
            ref={commentForm => (this.commentForm = commentForm)}
            className="commenting-form"
          >
            <div className="row">
              <div className="form-group col-md-12">
                <input
                  className="form-control"
                  type="text"
                  name="author"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="form-group col-md-12">
                <textarea
                  className="form-control"
                  name="body"
                  rows="3"
                  placeholder={
                    comments.length
                      ? 'Add your comment'
                      : 'Start the conversation'
                  }
                  required
                />
              </div>
              <div className="form-group col-md-12">
                <button className="btn btn-secondary">Add Comment</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default PostComments
