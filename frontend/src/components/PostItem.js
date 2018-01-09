import React, { Component } from 'react'
import { Link } from 'react-router-dom'

//import custom components
import PostControls from './PostControls'

//import helper function
import { fromNow } from '../utils/helpers'

class PostItem extends Component {
  render() {
    //extract post from props
    const { post } = this.props

    return (
      <div>
        <Link to={`/post/${post.id}`}>
          <h3> {post.title} </h3>
        </Link>
        <h5> Author: {post.author} </h5>
        <h6> Category: {post.category} </h6>
        <time> Posted: {fromNow(post.timestamp)} </time>
        <PostControls post={post} />
      </div>
    )
  }
}

export default PostItem
