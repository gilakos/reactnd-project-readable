import React, { Component } from 'react'
import { connect } from 'react-redux'
import FormSerialize from 'form-serialize'
import uuid from 'uuid'

import PostComments from './PostComments'

import { fetchPost } from '../actions/post'
import { addNewComment, fetchPostComments } from '../actions/comments'

import { fromNow } from '../utils/helpers'

class PostDetail extends Component {
  componentDidMount() {
    const postId = this.props.match.params.id || false
    this.props.fetchPost(postId)
    this.props.fetchPostComments(postId)
  }

  componentDidUpdate(nextProps) {
    // if the category filter changes, request posts again
    if (nextProps.match.params.id !== this.props.match.params.id) {
      const postId = this.props.match.params.id || false
      this.props.fetchPost(postId)
      this.props.fetchPostComments(postId)
    }
  }

  handleAddNewComment = event => {
    event.preventDefault()
    const postId = this.props.post.id
    const serializedForm = FormSerialize(event.target, {hash: true})
    const newCommentId = uuid()
    //create new comment object
    const newComment = {
      //unpack form
      ...serializedForm,
      id: newCommentId,
      parentId: postId,
      timestamp: new Date().getTime(),
    }
    console.log(newComment)
    this.props.addNewComment(newComment)
  }

  render() {
    const { post, comments } = this.props
    const postId = this.props.match.params.id || false
    const postComments = comments[postId] || []

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
        <hr />
        <p> Controls here </p>
        <hr />
        {postComments && (
          <PostComments
            comments={postComments}
            onAddNewComment={this.handleAddNewComment}
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

export default connect(mapStateToProps, { fetchPost, addNewComment, fetchPostComments })(
  PostDetail
)
