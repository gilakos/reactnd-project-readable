import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import CommentItem from './CommentItem'

import { fetchPostComments } from '../actions/comments'
import { timestampFormat, fromNow } from '../utils/helpers'

class CommentList extends Component {
  static propTypes = {
    parentId: PropTypes.string
  }

  componentDidMount() {
    const parentId = this.props.parentId
    this.props.fetchPostComments(parentId)
  }

  commentCount = comments => {
    return comments !== undefined ? comments.length : 0
  }

  render() {
    const { post, comments, parentId } = this.props
    const commentCount = this.commentCount( comments[parentId] );
    return (
      <ul>
        {comments.map(comment => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
        <li>
          <button>Add Comment</button>
        </li>
      </ul>
    )
  }
}

const mapStateToProps = ({ comments }, ownProps) => ({
  comments
})

export default connect(mapStateToProps, fetchPostComments)(CommentList)
