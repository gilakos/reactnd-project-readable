import React, { Component } from 'react'
import { connect } from 'react-redux'

import { currentCategory } from '../actions/categories'
import { fetchPosts } from '../actions/posts'
import PostItem from './PostItem'

class PostGrid extends Component {

  componentDidMount(){
    // on mount get posts with conditional category filter
    const category_filter = this.props.match.params.category || false
    this.props.fetchPosts(category_filter)
  }

  componentWillReceiveProps(nextProps){
    // if the category filter changes, request posts again
    if ( nextProps.match.params.category !== this.props.match.params.category ){
      const category_filter = this.props.match.params.category || false
      this.props.fetchPosts(category_filter)
    }
  }

  render () {
    const { posts } = this.props.posts

    return (
      <div>
        { posts !== undefined && posts.length ? posts.map (post => (
          <PostItem
            key={post.id}
            post={post}
          />
        )):(
          <p>No posts in {this.props.match.params.category} category </p>
        )
      }


        <hr />
        <h3>Home</h3>
        <ul>
          <li>
            DONE: should list all available categories, which should link to a category
            view for that category
          </li>
          <li>DONE: should list all of the posts</li>
          <li>
            should have a control for changing the sort method for the list,
            including at minimum, order by voteScore and order by timestamp
          </li>
          <li>should have a control for adding a new post</li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({posts}) => ({
  posts
})

export default connect(mapStateToProps, { fetchPosts, currentCategory })(PostGrid)
