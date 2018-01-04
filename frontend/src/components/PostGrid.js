import React, { Component } from 'react'

class PostGrid extends Component {
  render () {
    return (
      <div>
        <h3>Home</h3>
        <ul>
          <li>
            should list all available categories, which should link to a category
            view for that category
          </li>
          <li>should list all of the posts</li>
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

export default PostGrid
