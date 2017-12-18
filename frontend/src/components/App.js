import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/category">Category</Link>
          </li>
          <li>
            <Link to="/post">Post</Link>
          </li>
          <li>
            <Link to="/create-edit">Create / Edit</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/category" component={Category} />
        <Route path="/post" component={Post} />
        <Route path="/create-edit" component={CreateEdit} />
      </div>
    )
  }
}

const Home = () => (
  <div>
    <h3>Root</h3>
    <ul>
      <li>should list all available categories, which should link to a category view for that category</li>
      <li>should list all of the posts</li>
      <li>should have a control for changing the sort method for the list, including at minimum, order by voteScore and order by timestamp</li>
      <li>should have a control for adding a new post</li>
    </ul>
  </div>
)

const Category = () => (
  <div>
    <h3>Category</h3>
    <ul>
      <li>should list all available categories, which should link to a category view for that category</li>
      <li>should list all of the posts</li>
      <li>should have a control for changing the sort method for the list, including at minimum, order by voteScore and order by timestamp</li>
      <li>should have a control for adding a new post</li>
      <li>filtered to only include posts with the selected category</li>
    </ul>
  </div>
)

const Post = () => (
  <div>
    <h3>Post</h3>
    <ul>
      <li>should show the details of a post, including: Title, Body, Author, timestamp (in user readable format), and vote score</li>
      <li>should list all of the comments for that post</li>
      <li>should have controls to edit or delete the post</li>
      <li>should have a control to add a new comment.</li>
      <li>implement comment form however you want (inline, modal, etc.)</li>
      <li>comments should also have controls for editing or deleting</li>
    </ul>
  </div>
)

const CreateEdit = () => (
  <div>
    <h3>Create / Edit</h3>
    <ul>
      <li>should have a form to create new post or edit existing posts</li>
      <li>when editing, existing data should be populated in the form</li>
    </ul>
  </div>
)

export default App
