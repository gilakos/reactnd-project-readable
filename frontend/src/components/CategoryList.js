import React, { Component } from 'react'

class CategoryList extends Component {
  render () {
    return (
      <div>
        <h3>Category</h3>
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
          <li>DONE: filtered to only include posts with the selected category</li>
        </ul>
        <div id="catnav">
          <aside>
            <ul>
              <li>category1</li>
              <li>category2</li>
              <li>category3</li>
            </ul>
          </aside>
        </div>
      </div>
    )
  }
}

export default CategoryList
