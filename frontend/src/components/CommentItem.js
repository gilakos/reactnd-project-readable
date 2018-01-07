import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class CommentItem extends Component {
  render() {
    const { comment } = this.props

    return (
      <li
        key={comment.id}
        >
        <h5> Author: {comment.author} </h5>
        <p> {comment.body} </p>
      </li>
    )
  }
}

export default CommentItem
