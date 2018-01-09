import React, { Component } from 'react'
import { connect } from 'react-redux'

import PostItem from './PostItem'
import SortControls from './SortControls'

import { currentCategory } from '../actions/categories'
import { fetchPosts } from '../actions/posts'

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

  //function to sort posts
  sortPosts = (posts, sort) => {
    //check to ensure posts are defined
    if (posts !== undefined){
      //switch by case
      switch (sort.orderby){
        case 'date':
          //sort by timestamp
          return sort.sort === 'ascending' ?
            posts.sort((a,b) => a.timestamp > b.timestamp):
            posts.sort((a,b) => a.timestamp < b.timestamp)
        case 'score':
          //sort by voteScore
          return sort.sort === 'ascending' ?
            posts.sort((a,b) => a.voteScore > b.voteScore):
            posts.sort((a,b) => a.voteScore < b.voteScore)
        default:
          //default case returns posts as is
          return posts
      }
    } else {
      return posts
    }
  }

  render() {
    const { posts } = this.props.posts
    const { sort } = this.props

    //sort the posts
    const sortedPosts = this.sortPosts( posts, sort )

    return (
      <div>
        <SortControls/>
        {sortedPosts !== undefined && sortedPosts.length ? (
          sortedPosts.map(post => <PostItem key={post.id} post={post} />)
        ) : (
          <p>No posts in {this.props.match.params.category} category </p>
        )}
      </div>
    )
  }
}

const mapStateToProps = ({ posts, sort }) => ({
  posts,
  sort
})

export default connect(mapStateToProps, { fetchPosts, currentCategory })(
  PostList
)
