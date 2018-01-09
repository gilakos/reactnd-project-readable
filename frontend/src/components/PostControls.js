import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

//import custom components
import VoteControls from './VoteControls'

//import actions for post
import { removePost } from '../actions/post'

class PostControls extends Component {
  //handle edit post event
  handleEditPost = () => {
    //send user to editing page
    this.props.history.push(`/edit/${this.props.post.id}`)
  }

  //handle delete post event
  handleDeletePost = () => {
    //remove the post action
    this.props.removePost(this.props.post).then(() => {
      if (this.props.categories.selectCategory) {
        //if in a selected category, send to category list view
        this.props.history.push(`/${this.props.categories.selectCategory}`)
      } else {
        //otherwise send home
        this.props.history.push('/')
      }
    })
  }

  render() {
    //extract post from props
    const { post } = this.props

    return (
      <div>
        <div>
          <VoteControls entry={post} />
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

//subscribe component state to Redux store updates
const mapStateToProps = ({ categories }) => ({
  categories
})

//inject functions into component props
const mapDispatchToProps = {
  removePost
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PostControls)
)
