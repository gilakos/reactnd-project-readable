import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchCategories } from '../actions/categories'
import AppHeader from './AppHeader'
import PostGrid from './PostGrid'
import CategoryGrid from './CategoryGrid'
import Post from './Post'
import CreateEditPost from './CreateEditPost'

class App extends Component {
  static propTypes = {
    getCategories: PropTypes.func.isRequired,
    //getPosts: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.getCategories()
    //this.props.getPosts()
  }

  render() {

    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={AppHeader}/>
          <Switch />
          <hr />
          <Route exact path="/" component={PostGrid} />
          <Route path="/category/" component={CategoryGrid} />
          <Route path="/post/" component={Post} />
          <Route path="/create-edit" component={CreateEditPost} />
        </div>
      </BrowserRouter>
    )
  }
}


const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(fetchCategories())
  //getPosts: () => dispatch(fetchPosts()),
})

export default connect(null, mapDispatchToProps)(App)
