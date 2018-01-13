import React, { Component } from 'react'
import { connect } from 'react-redux'
import FormSerialize from 'form-serialize'
import uuid from 'uuid'

//import custom components
import PostCreateEditForm from './PostCreateEditForm'

//import actions for post
import { addNewPost } from '../actions/post'

class PostCreate extends Component {
  //handle post creation event
  handlePostSubmit = ( event ) => {
    event.preventDefault()
    //serialize text from form
    const serializedForm = FormSerialize(event.target, {hash: true})
    //create a new unique id for the post
    const newPostId = uuid()
    //create new post object
    const newPost = {
      //unpack form
      ...serializedForm,
      id: newPostId,
      timestamp: new Date().getTime(),
    }
    //add new post action
    this.props.addNewPost( newPost ).then( ({ p }) => {
      //send to newly created post page
      this.props.history.push(`/${newPost.category}/${newPost.id}`);
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
      </div>
    )
  }
}

//inject functions into component props
const mapDispatchToProps = {
  addNewPost
}

export default connect(null, mapDispatchToProps)(PostCreate)
