import React, { Component } from 'react'
import { connect } from 'react-redux'
import FormSerialize from 'form-serialize'
import uuid from 'uuid'

//import custom components
import PostControls from './PostControls'
import PostComments from './PostComments'

//import actions for post and comments
import { fetchPost } from '../actions/post'
import { addNewComment, fetchPostComments } from '../actions/comments'

//import helper function
import { fromNow } from '../utils/helpers'

class PostDetail extends Component {
  //fetch post and comments on mount
  componentDidMount() {
    const postId = this.props.match.params.id || false
    this.props.fetchPost(postId)
    this.props.fetchPostComments(postId)
  }

  //fetch post and comments on component update
  componentDidUpdate(nextProps) {
    // if the category filter changes, request posts again
    if (nextProps.match.params.id !== this.props.match.params.id) {
      const postId = this.props.match.params.id || false
      this.props.fetchPost(postId)
      this.props.fetchPostComments(postId)
    }
  }

  //handle new comment event
  handleAddNewComment = event => {
    event.preventDefault()
    //extract parent post id from props
    const postId = this.props.post.id
    //serialize text from form
    const serializedForm = FormSerialize(event.target, { hash: true })
    //create a new unique id for the comment
    const newCommentId = uuid()
    //create new comment object
    const newComment = {
      //unpack form
      ...serializedForm,
      id: newCommentId,
      parentId: postId,
      timestamp: new Date().getTime()
    }
    //add new comment action
    this.props.addNewComment(newComment)
  }

  render() {
    //extract post, comments, history from props
    const { post, comments, history } = this.props
    //extract post id (if exists) from props
    const postId = this.props.match.params.id || false
    //get the comments for this post id
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
        <PostControls post={post} history={history} />
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

//subscribe component state to Redux store updates
const mapStateToProps = ({ post, comments }) => ({
  post: post.post ? post.post : post,
  comments
})

//inject functions into component props
const mapDispatchToProps = {
  fetchPost,
  addNewComment,
  fetchPostComments
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)
