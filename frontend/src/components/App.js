import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchCategories } from '../actions/categories'
import { fetchPosts } from '../actions/posts'

import AppHeader from './AppHeader'
import PostList from './PostList'
import PostDetail from './PostDetail'
import CategoryList from './CategoryList'
import PostToDo from './PostToDo'
import CreateEditPost from './CreateEditPost'

class App extends Component {
  static propTypes = {
    getCategories: PropTypes.func.isRequired,
    getPosts: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.getCategories()
    this.props.getPosts()
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={AppHeader} />
          </Switch>
          <hr />
          <Switch>
            <Route exact path="/" component={PostList} />
            <Route exact path="/category/:category" component={PostList} />
            <Route path="/category" component={CategoryList} />
            <Route exact path="/post/:id" component={PostDetail} />
            <Route exact path="/post" component={PostToDo} />
            <Route path="/create-edit" component={CreateEditPost} />
          </Switch>
          <hr />

          <h3>Home</h3>
          <ul>
            <li>
              DONE: should list all available categories, which should link to a
              category view for that category
            </li>
            <li>DONE: should list all of the posts</li>
            <li>
              should have a control for changing the sort method for the list,
              including at minimum, order by voteScore and order by timestamp
            </li>
            <li>should have a control for adding a new post</li>
          </ul>
          <h6> Post List below</h6>
        </div>
      </BrowserRouter>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(fetchCategories()),
  getPosts: () => dispatch(fetchPosts())
})

export default connect(null, mapDispatchToProps)(App)
