import React, { Component } from 'react'

class PostItem extends Component {
  render() {
    const { post } = this.props

    return (
      <div>
        <div>
          <h3> {post.title} </h3>
          <h5> Author: {post.author} </h5>
          <h6> Category: {post.category} </h6>
          <p> Posted: {post.timestamp} </p>
          <p> controls here </p>
        </div>
        <hr />

        {/* <h3>Post</h3>
        <ul>
          <li>
            should show the details of a post, including: Title, Body, Author,
            timestamp (in user readable format), and vote score
          </li>
          <li>should list all of the comments for that post</li>
          <li>should have controls to edit or delete the post</li>
          <li>should have a control to add a new comment.</li>
          <li>implement comment form however you want (inline, modal, etc.)</li>
          <li>comments should also have controls for editing or deleting</li>
        </ul> */}
      </div>
    )
  }
}

export default PostItem
