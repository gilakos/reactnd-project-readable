import React, { Component } from 'react'
import { connect } from 'react-redux'
import FormSerialize from 'form-serialize'
import uuid from 'uuid'

import { addNewPost } from '../actions/post'
import PostCreateEditForm from './PostCreateEditForm'

class PostCreate extends Component {

  handlePostSubmit = ( event ) => {
    event.preventDefault()
    const serializedForm = FormSerialize(event.target, {hash: true})
    const newPostId = uuid()
    //create new post object
    const newPost = {
      //unpack form
      ...serializedForm,
      id: newPostId,
      timestamp: new Date().getTime(),
    }
    this.props.addNewPost( newPost ).then( ({ p }) => {
      this.props.history.push(`/post/${newPost.id}`);
    })
  }

  render () {
    return (
      <div>
        <div>
          <PostCreateEditForm
            formHeader='Add New Post'
            onFormSubmit={this.handlePostSubmit}
          />
        </div>
        <h3>Create / Edit</h3>
        <ul>
          <li>DONE: should have a form to create new post or edit existing posts</li>
          <li>when editing, existing data should be populated in the form</li>
        </ul>
      </div>
    )
  }
}

export default connect(null, { addNewPost })(PostCreate)
