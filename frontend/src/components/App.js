import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchCategories } from '../actions/categories'
import { fetchPosts } from '../actions/posts'

import AppHeader from './AppHeader'
import PostGrid from './PostGrid'
import CategoryGrid from './CategoryGrid'
import PostItem from './PostItem'
import CreateEditPost from './CreateEditPost'

class App extends Component {
  static propTypes = {
    getCategories: PropTypes.func.isRequired,
    getPosts: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.getCategories()
    this.props.getPosts()
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={AppHeader} />
        </Switch>
        <hr />
        <Switch>
          <Route exact path="/" component={PostGrid} />
          {/* <Route path="/category" component={CategoryGrid} />
          <Route path="/post" component={PostItem} />
          <Route path="/create-edit" component={CreateEditPost} /> */}
        </Switch>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(fetchCategories()),
  getPosts: () => dispatch(fetchPosts())
})

export default connect(null, mapDispatchToProps)(App)
