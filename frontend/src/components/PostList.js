import React, { Component } from 'react'
import { connect } from 'react-redux'

//import custom components
import PostItem from './PostItem'
import SortControls from './SortControls'

//import actions for category amd post
import { currentCategory } from '../actions/categories'
import { fetchPosts } from '../actions/posts'

class PostList extends Component {
  //fetch posts on mount
  componentDidMount() {
    //get posts with conditional category filter
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

  //function to sort posts by sort object
  //sort.orderby = 'date' or 'score'
  //sort.sort = 'ascending' or 'descending'
  sortPosts = (posts, sort) => {
    //check to ensure posts are defined
    if (posts !== undefined) {
      //switch by case
      switch (sort.orderby) {
        case 'date':
          //sort by timestamp
          return sort.sort === 'ascending'
            ? posts.sort((a, b) => a.timestamp > b.timestamp)
            : posts.sort((a, b) => a.timestamp < b.timestamp)
        case 'score':
          //sort by voteScore
          return sort.sort === 'ascending'
            ? posts.sort((a, b) => a.voteScore > b.voteScore)
            : posts.sort((a, b) => a.voteScore < b.voteScore)
        default:
          //default case returns posts as is
          return posts
      }
    } else {
      //return posts as is if undefined
      return posts
    }
  }

  render() {
    //extract posts, sort from props
    const { posts } = this.props.posts
    const { sort } = this.props

    //sort the posts
    const sortedPosts = this.sortPosts(posts, sort)

    return (
      <div>
        <SortControls />
        {sortedPosts !== undefined && sortedPosts.length ? (
          sortedPosts.map(post => <PostItem key={post.id} post={post} />)
        ) : (
          <div className="container">
            <div className="row">
              <div
                className="post col-xl-12"
                style={{
                  background: '#f5f5f5',
                  margin: '10px',
                  padding: '5px 10px'
                }}
              >
                <div className="post-details">
                  <h3 className="h3" style={{ margin: '6px 0px 2px' }}>
                    No posts in {this.props.match.params.category} category
                  </h3>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

//subscribe component state to Redux store updates
const mapStateToProps = ({ posts, sort }) => ({
  posts,
  sort
})

//inject functions into component props
const mapDispatchToProps = {
  fetchPosts,
  currentCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
