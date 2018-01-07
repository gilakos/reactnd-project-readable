import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { fromNow } from '../utils/helpers'

class PostItem extends Component {
  render() {
    const { post } = this.props

    return (
      <div>
        <Link to={`/post/${post.id}`} >
          <h3> {post.title} </h3>
        </Link>
        <h5> Author: {post.author} </h5>
        <h6> Category: {post.category} </h6>
        <time> Posted: {fromNow(post.timestamp)} </time>
        <p> controls here </p>
      </div>
    )
  }
}

export default PostItem
