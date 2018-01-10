import React, { Component } from 'react'
import { connect } from 'react-redux'
import FormSerialize from 'form-serialize'
import uuid from 'uuid'

//import custom components
import PostControls from './PostControls'
import PostComments from './PostComments'
import VoteControls from './VoteControls'

//import actions for post and comments
import { fetchPost } from '../actions/post'
import { addNewComment, fetchPostComments } from '../actions/comments'

//import helper function
import { fromNow } from '../utils/helpers'

//import styles
import '../css/index.css'
import '../css/bootstrap-grid.css'
import '../css/bootstrap-reboot.css'
import '../css/bootstrap.css'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faComment from '@fortawesome/fontawesome-free-solid/faComment'
import faClock from '@fortawesome/fontawesome-free-solid/faClock'

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
    const { post, comments } = this.props
    //extract post id (if exists) from props
    const postId = this.props.match.params.id || false
    //get the comments for this post id
    const postComments = comments[postId] || []

    return (
      <div className="container">
        <div className="row">
          <main className="post blog-post col-lg-12">
            <div className="container">
              <div className="post-single">
                <div
                  className="post-details"
                  style={{
                  background: '#f5f5f5',
                  padding: '5px 10px'
                }}>
                  <h1>{post.title}</h1>
                  <div className="post-meta d-flex justify-content-between">
                    <div className="category">
                      <a href="">{post.category}</a>
                    </div>
                  </div>
                  <div
                    className="post-footer d-flex align-items-center flex-column flex-sm-row"
                    style={{ fontSize: '.85rem' }}
                  >
                    <a
                      href=""
                      className="author d-flex align-items-center flex-wrap"
                    >
                      <div className="title">
                        <span>{post.author}</span>
                      </div>
                    </a>
                    <div className="d-flex align-items-center flex-wrap">
                      <div className="date">
                        <FontAwesomeIcon icon={faClock} />{' '}
                        {fromNow(post.timestamp)}
                      </div>
                      <div className="comments meta-last">
                        <FontAwesomeIcon icon={faComment} /> {post.commentCount}
                      </div>
                    </div>
                  </div>
                  <div className="post-body">
                    <p>{post.body}</p>
                  </div>
                  <footer
                    className="post-footer d-flex align-items-center"
                    style={{ fontSize: '.85rem' }}
                  >
                    <VoteControls entry={post} />
                    <PostControls post={post} />
                  </footer>
                </div>
                <div className="post-comments">
                  <header>
                    <h3 className="h6">
                      Post Comments<span className="no-of-comments">
                        {post.commentCount}
                      </span>
                    </h3>
                  </header>

                  {postComments && (
                    <PostComments
                      comments={postComments}
                      onAddNewComment={this.handleAddNewComment}
                    />
                  )}
                </div>
              </div>
            </div>
          </main>
        </div>
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
