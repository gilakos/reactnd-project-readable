import React, { Component } from 'react'
import { Switch, Route, withRouter  } from 'react-router-dom'

//import custom components
import AppHeader from './AppHeader'
import PostList from './PostList'
import PostDetail from './PostDetail'
import CategoryList from './CategoryList'
import PostToDo from './PostToDo'
import PostCreate from './PostCreate'
import PostEdit from './PostEdit'

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
            <Route exact path="/category" component={CategoryList} />
            <Route exact path="/category/:category" component={PostList} />
            <Route exact path="/post/:id" component={PostDetail} />
            <Route exact path="/edit/:id" component={PostEdit} />
            <Route exact path="/create" component={PostCreate} />
            <Route exact path="/post" component={PostToDo} />
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
            <li>DONE: should have a control for adding a new post</li>
          </ul>
        </div>
    )
  }
}

export default withRouter(App)
