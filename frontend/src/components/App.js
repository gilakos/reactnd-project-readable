import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'

//import custom components
import AppHeader from './AppHeader'
import PostList from './PostList'
import PostDetail from './PostDetail'
import PostEdit from './PostEdit'
import PostCreate from './PostCreate'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={AppHeader} />
        </Switch>
        <hr />
        <Switch>
          <Route exact path="/" component={PostList} />
          <Route exact path="/category/:category" component={PostList} />
          <Route exact path="/post/:id" component={PostDetail} />
          <Route exact path="/edit/:id" component={PostEdit} />
          <Route exact path="/create" component={PostCreate} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)
