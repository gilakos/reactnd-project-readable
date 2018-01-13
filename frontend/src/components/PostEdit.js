import React, { Component } from 'react'
import { connect } from 'react-redux'
import FormSerialize from 'form-serialize'

//import custom components
import PostCreateEditForm from './PostCreateEditForm'

//import actions for post
import { fetchPost, updatePost } from '../actions/post'

class PostEdit extends Component {
  //fetch post on mount
  componentDidMount() {
    const postId = this.props.match.params.id || false
    this.props.fetchPost(postId)
  }

  //fetch post on component update
  componentDidUpdate(nextProps) {
    // if the category filter changes, request post again
    if (nextProps.match.params.id !== this.props.match.params.id) {
      const postId = this.props.match.params.id || false
      this.props.fetchPost(postId)
    }
  }

  //handle post update event
  handlePostUpdate = event => {
    event.preventDefault()
    //serialize text from form
    const serializedForm = FormSerialize(event.target, { hash: true })
    //create updated post object
    const updatedPost = {
      ...this.props.post,
      //unpack form
      ...serializedForm,
      timestamp: new Date().getTime()
    }
    //update post action
    this.props.updatePost(updatedPost).then(({ p }) => {
      //send to newly updated post page
      this.props.history.push(`/${updatedPost.category}/${updatedPost.id}`)
    })
  }

  render() {
    //extract post from props
    const { post } = this.props

    return (
      <div>
        <div>
          <PostCreateEditForm
            formHeader="Edit Post"
            post={post}
            onFormSubmit={this.handlePostUpdate}
          />
        </div>
      </div>
    )
  }
}

//subscribe component state to Redux store updates
const mapStateToProps = ({ post }) => ({
  post: post.post ? post.post : post
})

//inject functions into component props
const mapDispatchToProps = {
  fetchPost,
  updatePost
}

export default connect(mapStateToProps, mapDispatchToProps)(PostEdit)
