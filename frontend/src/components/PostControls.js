import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { removePost } from '../actions/post'
import VoteControls from './VoteControls'

class PostControls extends Component {

  handleEditPost = () => {
    //send user to editing page
    this.props.history.push(`/edit/${this.props.post.id}`)
  }

  handleDeletePost = () => {
    //remove the post action
    this.props.removePost(this.props.post)
      .then( () => {
        if( this.props.categories.selectCategory ){
          //if in a selected category, send to category list view
          this.props.history.push(`/${this.props.categories.selectCategory}`)
        } else {
          //otherwise send home
          this.props.history.push('/')
        }
      })

  }

  render() {
    //get post from props
    const { post } = this.props

    return (
      <div>
        <div>
          <VoteControls entry={ post } />
          <button
            onClick={() => {
              this.handleEditPost()
            }}
          >
            Edit
          </button>
          <button
            onClick={() => {
              this.handleDeletePost()
            }}
          >
            Delete
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ categories }) => ({
  categories
})

export default withRouter(
  connect(mapStateToProps, { removePost })(PostControls)
)
