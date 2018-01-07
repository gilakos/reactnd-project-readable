import React, { Component } from 'react'
import CommentItem from './CommentItem'

class PostComments extends Component {
  //handle form submission event for new comment
  handleCommentSubmit = event => {
    event.preventDefault()
    this.props.onAddNewComment(event)
    this.commentForm.reset()
  }

  render() {
    const { comments } = this.props

    return (
      <div>
        <div>
          <h6>
            {comments.length ? `Comments (${comments.length})` : 'No comments'}
          </h6>
        </div>
        <ul>
          {comments.map(comment => (
            <CommentItem
              key={comment.id}
              comment={comment} />
          ))}
          <li>
            <h6>
              {comments.length ? 'Add a comment' : 'Start the conversation'}
            </h6>
            <form
              onSubmit={this.handleCommentSubmit}
              ref={commentForm => (this.commentForm = commentForm)}
            >
              <div>
                <input
                  type="text"
                  name="author"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <textarea
                  name="body"
                  rows="2"
                  placeholder="Your comment"
                  required
                />
              </div>
              <button>Add Comment</button>
            </form>
          </li>
        </ul>
      </div>
    )
  }
}

export default PostComments
