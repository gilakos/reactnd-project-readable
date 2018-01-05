import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchPost } from '../actions/post'
import { timestampFormat, fromNow } from '../utils/helpers'

class PostDetail extends Component {
  componentDidMount() {
    const id = this.props.match.params.id || false
    this.props.fetchPost(id)
  }

  componentDidUpdate(nextProps) {
    // if the category filter changes, request posts again
    if (nextProps.match.params.id !== this.props.match.params.id) {
      const id = this.props.match.params.id || false
      this.props.fetchPost(id)
    }
  }

  render() {
    const { post } = this.props
    console.log(post)

    return (
      <div>
        <h3> {post.title} </h3>
        <h5> Author: {post.author} </h5>
        <h6> Category: {post.category} </h6>
        <time> Posted: {fromNow(post.timestamp)} </time>
        <hr />
        <p> {post.body} </p>
        <hr />
        <p> Votes: {post.voteScore} </p>
        <p> Controls here </p>
        <p> Comments here </p>
      </div>
    )
  }
}

const mapStateToProps  = ({ post }) => ({
  post: post.post ? post.post : post,
  //comments
})

export default connect(mapStateToProps, { fetchPost })(PostDetail)
