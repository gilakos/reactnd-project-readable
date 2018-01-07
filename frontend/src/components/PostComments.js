import React, { Component } from 'react';
import CommentItem from './CommentItem';

class PostComments extends Component {
  render () {

    const { comments } = this.props;

    return (
      <div>
        <div>
          <h6>
            {comments.length ? `Comments (${comments.length})` : "No comments"}
          </h6>
        </div>
        <ul>
          { comments.map( comment => (
            <CommentItem
              key={comment.id}
              comment={comment}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default PostComments
