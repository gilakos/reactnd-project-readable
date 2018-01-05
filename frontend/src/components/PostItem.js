import React, { Component } from 'react'

class PostItem extends Component {
  render() {
    const { post } = this.props

    return (
      <div>
        <h3> {post.title} </h3>
        <h5> Author: {post.author} </h5>
        <h6> Category: {post.category} </h6>
        <p> Posted: {post.timestamp} </p>
        <p> controls here </p>
      </div>
    )
  }
}

export default PostItem
