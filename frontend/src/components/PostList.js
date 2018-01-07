import React, { Component } from 'react'
import { connect } from 'react-redux'

import { currentCategory } from '../actions/categories'
import { fetchPosts } from '../actions/posts'
import PostItem from './PostItem'

class PostList extends Component {
  componentDidMount() {
    // on mount get posts with conditional category filter
    const category_filter = this.props.match.params.category || false
    this.props.fetchPosts(category_filter)
  }

  componentDidUpdate(nextProps) {
    // if the category filter changes, request posts again
    if (nextProps.match.params.category !== this.props.match.params.category) {
      const category_filter = this.props.match.params.category || false
      this.props.fetchPosts(category_filter)
    }
  }

  render() {
    const { posts } = this.props.posts

    return (
      <div>
        {posts !== undefined && posts.length ? (
          posts.map(post => <PostItem key={post.id} post={post} />)
        ) : (
          <p>No posts in {this.props.match.params.category} category </p>
        )}
      </div>
    )
  }
}

const mapStateToProps = ({ posts }) => ({
  posts
})

export default connect(mapStateToProps, { fetchPosts, currentCategory })(
  PostList
)
