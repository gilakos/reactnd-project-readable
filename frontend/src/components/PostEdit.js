import React, { Component } from 'react'
import { connect } from 'react-redux'
import FormSerialize from 'form-serialize'

import { fetchPost, updatePost } from '../actions/post'
import PostCreateEditForm from './PostCreateEditForm'

class PostEdit extends Component {
  componentDidMount() {
    const postId = this.props.match.params.id || false
    this.props.fetchPost(postId)
  }

  componentDidUpdate(nextProps) {
    // if the category filter changes, request posts again
    if (nextProps.match.params.id !== this.props.match.params.id) {
      const postId = this.props.match.params.id || false
      this.props.fetchPost(postId)
    }
  }

  handlePostUpdate = event => {
    event.preventDefault()
    const serializedForm = FormSerialize(event.target, { hash: true })
    //create new post object
    const post = {
      //unpack form
      ...this.props.post,
      ...serializedForm,
      timestamp: new Date().getTime(),
    }
    this.props.updatePost(post).then(({ p }) => {
      this.props.history.push(`/post/${post.id}`)
    })
  }

  render() {
    const { post } = this.props
    //console.log(this.props.post)

    return (
      <div>
        <div>
          <PostCreateEditForm
            formHeader="Edit Post"
            post={post}
            onFormSubmit={this.handlePostUpdate}
          />
        </div>
        <h3>Create / Edit</h3>
        <ul>
          <li>
            DONE: should have a form to create new post or edit existing posts
          </li>
          <li>DONE: when editing, existing data should be populated in the form</li>
        </ul>
      </div>
    )
  }
}
const mapStateToProps  = ({ post }) => ({
  post: post.post ? post.post : post,
})

export default connect(mapStateToProps, { fetchPost, updatePost })(PostEdit)
