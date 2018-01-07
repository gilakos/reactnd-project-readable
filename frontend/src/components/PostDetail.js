import React, { Component } from 'react'
import { connect } from 'react-redux'

import CommentList from './CommentList'
import PostComments from './PostComments'

import { fetchPost } from '../actions/post'
import { fetchPostComments } from '../actions/comments'

import { timestampFormat, fromNow } from '../utils/helpers'

class PostDetail extends Component {
  componentDidMount() {
    const id = this.props.match.params.id || false
    this.props.fetchPost(id)
    this.props.fetchPostComments(id)
  }

  componentDidUpdate(nextProps) {
    // if the category filter changes, request posts again
    if (nextProps.match.params.id !== this.props.match.params.id) {
      const id = this.props.match.params.id || false
      this.props.fetchPost(id)
      this.props.fetchPostComments(id)
    }
  }

  render() {
    const { post, comments } = this.props
    const id = this.props.match.params.id || false
    const postComments = comments[id] || []

    console.log(comments)
    return (
      <div>
        <h3> {post.title} </h3>
        <h5> Author: {post.author} </h5>
        <h6> Category: {post.category} </h6>
        <time> Posted: {fromNow(post.timestamp)} </time>
        <hr />
        <p> {post.body} </p>
        <hr />
        <p>
          Votes: {post.voteScore} Comments: {post.commentCount}
        </p>
        <hr/>
        <p> Controls here </p>
        <hr/>
        {postComments && (
              <PostComments
                comments={postComments}
                onNewComment={this.handleNewComment}
              />
            )}
      </div>
    )
  }
}

const mapStateToProps = ({ post, comments }) => ({
  post: post.post ? post.post : post,
  comments
})

export default connect(mapStateToProps, { fetchPost, fetchPostComments })(PostDetail)
